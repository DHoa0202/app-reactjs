import React from "react";
import { storage as st } from "../../model/utils/util";
import { cartHandle as handle } from '../../model/utils/util'

const nf = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' })

const handleState = (_evt, e, state) => {
    let [obj, setState] = state; // ('setState' is 'super.setState') != 'this.setState'
    handle.add(obj.cart, e.id).then(cart => {
        setState(Object.assign({ cart: cart }, obj))
        st.set('cart', cart)
    })
}

class CardProduct extends React.Component {
    render() {
        let [e, state] = this.props['params'];

        return <div className="card bg-transparent col-lg-4 col-sm-6 position-relative">
            <img src={e.image} className="card-img" alt={e.name} />
            <div className="card-img-overlay text-warning">
                <h5 className="card-title">{e.name}</h5>
                <div className="position-absolute bottom-0">
                    <h6 className="vc">{nf.format(e.price)}</h6>
                </div>
            </div>
            <button className="position-absolute top-0 end-0 p-2 border rounded-circle button"
                onClick={evt => handleState(evt, e, state)}
            >➕</button>
        </div>
    }
}

const vrProduct = (props) => {
    let [e, state] = props['params'];

    return <div className="card bg-transparent col-lg-4 col-sm-6 position-relative">
        <img src={e.image} className="card-img-top" alt={e.name} />
        <div className="card-body">
            <h5 className="card-title">{e.name}</h5>
            <div className="position-absolute bottom-0">
                <h6 className="vc">{nf.format(e.price)}</h6>
            </div>
        </div>
        <button className="position-absolute top-0 end-0 p-2 border rounded-circle button"
            onClick={evt => handleState(evt, e, state)}
        >➕</button>
    </div>
}

const hrProduct = (props) => {
    let [e, state] = props['params'];

    return <div className="card bg-transparent col-lg-6 col-sm-4 position-relative" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src={e.image} className="img-fluid rounded-start" alt={e.name} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <div className="position-absolute bottom-0">
                        <h6 className="vc">{nf.format(e.price)}</h6>
                    </div>
                </div>
            </div>
        </div>
        <button className="position-absolute top-0 end-0 p-2 border rounded-circle button"
            onClick={evt => handleState(evt, e, state)}
        >➕</button>
    </div>
}

export default CardProduct;
export { hrProduct, vrProduct }
