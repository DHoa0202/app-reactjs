import React from "react";
import { util2D, cartHandle as handle, storage as st } from "../../model/utils/util";
import { products } from '../../model/utils/data';

const nf = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' })

class cartOrder extends React.Component {

    state = { amount: 0 };

    #handleState(data) {
        let amount = 0;
        let [obj, setState] = this.props['state'];
        data.forEach(e => amount += e.price * e.qty);
        this.setState({ amount: amount })
        setState({ cart: data, products: obj.products}) // super state from props
        st.set('cart', data)
    }

    #handleQty(evt, i, data) {
        handle.set(data, data[i].id, evt.target.value)
            .then(result => this.#handleState(result))
            .catch(err => console.error(err))
    }

    #removeHandle(_evt, i, data) {
        data.splice(i, 1)
        this.#handleState(data);
    }

    render() {
        let [obj] = this.props['state'];
        let data = util2D.innerMerge(products, obj.cart, 'id');

        return <React.Fragment>
            {/* OffCanvas */}
            <div className="offcanvas offcanvas-start" id="cartOffCanvas" style={{ width: '50%' }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Item ordered</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {/* SHOW ALL ITEMS ORDERED */}
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">image</th>
                                <th scope="col">name</th>
                                <th scope="col">price</th>
                                <th scope="col">quantity</th>
                                <th scope="col" colSpan={2}> {this.state.amount
                                    ? nf.format(this.state.amount)
                                    : obj.cart.length
                                        ? <button className="btn btn-outline-secondary"
                                            onClick={() => this.#handleState(data)}
                                        >calculate</button> : 'amount'
                                }
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e, i) =>
                                <tr key={e.id} style={{ verticalAlign: 'middle' }}>
                                    <td scope="col">
                                        <img width={'96px'} src={e.image} alt={e.name} />
                                    </td>
                                    <td scope="col">{e.name}</td>
                                    <td scope="col">{e.price}</td>
                                    <td scope="col">
                                        <input type="number" className="form-control" value={e.qty}
                                            onChange={evt => this.#handleQty(evt, i, data)} min={0} max={99}
                                        />
                                    </td>
                                    <td scope="col">{nf.format(e.price * e.qty)}</td>
                                    <td scope="col">
                                        <button className="btn btn-outline-danger"
                                            onClick={evt => this.#removeHandle(evt, i, data)}
                                        >delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    }
}

export default cartOrder