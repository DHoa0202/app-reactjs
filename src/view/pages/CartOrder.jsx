import React from "react";
import { util2D } from "../../model/utils/util";
import { products } from '../../model/utils/data';

const nf = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' })

class cartOrder extends React.Component {

    #handleQty(evt, i, data) {
        let [, setState] = this.props['state'];
        data[i].qty = evt.target.value;
        setState({ cart: data })
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
                                <th scope="col">amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e, i) =>
                                <tr key={e.id} style={{verticalAlign: 'middle'}}>
                                    <td scope="col">
                                        <img width={'96px'} src={e.image} alt={e.name} />
                                    </td>
                                    <td scope="col">{e.name}</td>
                                    <td scope="col">{e.price}</td>
                                    <td scope="col">
                                        <input type="number" className="form-control" defaultValue={e.qty}
                                            onChange={evt => this.#handleQty(evt, i, data)}
                                        />
                                    </td>
                                    <td scope="col">{nf.format(e.price * e.qty)}</td>
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