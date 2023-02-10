import React from "react";
import { cartHandle as handle } from '../../model/utils/util'

class CardProduct extends React.Component {
    render() {
        let [e, state] = this.props['params'];
        let [obj, setState] = state; // ('setState' is 'super.setState') != 'this.setState'

        return <div className="card bg-transparent col-lg-4 col-sm-3 flex-fill position-relative">
            <img src={e.image} className="card-img" alt={e.name} />
            <div className="card-img-overlay text-warning">
                <h5 className="card-title">{e.name}</h5>
            </div>
            <button className="position-absolute top-0 end-0 p-2 border bg-success rounded-circle"
                onClick={() => handle.add(obj.cart, e.id).then(cart => setState({ cart }))}
            >➕</button>
        </div>
    }
}

const vrProduct = (props) => {
    let [e, state] = props['params'];
    let [obj, setState] = state; // ('setState' is 'super.setState') != 'this.setState'

    return <div className="card bg-transparent col-lg-4 col-sm-3 flex-fill position-relative">
        <img src={e.image} className="card-img-top" alt={e.name} />
        <div className="card-body">
            <h5 className="card-title">{e.name}</h5>
        </div>
        <button className="position-absolute top-0 end-0 p-2 border bg-success rounded-circle"
            onClick={() => handle.add(obj.cart, e.id).then(cart => setState({ cart }))}
        >➕</button>
    </div>
}

const hrProduct = (props) => {
    let [e, state] = props['params'];
    let [obj, setState] = state; // ('setState' is 'super.setState') != 'this.setState'

    return <div className="card bg-transparent col-lg-6 col-sm-4 flex-fill position-relative" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src={e.image} className="img-fluid rounded-start" alt={e.name} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                </div>
            </div>
        </div>
        <button className="position-absolute top-0 end-0 p-2 border bg-success rounded-circle"
            onClick={() => handle.add(obj.cart, e.id).then(cart => setState({ cart }))}
        >➕</button>
    </div>
}

export default CardProduct;
export { hrProduct, vrProduct }
