import React from "react";
import * as prd from "./CardProduct";

class ListProduct extends React.Component {

    #typeItem(data, state, type) {
        switch (type) {
            case 'vr': case 'vertical':
                return data.map(e => <prd.vrProduct key={e.id} params={[e, state]} />);
            case 'hr': case 'horizontal':
                return data.map(e => <prd.hrProduct key={e.id} params={[e, state]} />);
            default:
                return data.map(e => <prd.default key={e.id} params={[e, state]} />);
        }
    }

    #carouselItem(data, key, className) {
        const state = this.props['state']
        const type = this.props['type'];
        const txt = 'carousel-item container';

        return <div className={className ? `${txt} ${className}` : txt} key={key}>
            <div className="container">
                <div className="row g-2" style={{ maxHeight: '80vh', overflow: "auto" }}>
                    {this.#typeItem(data, state, type)}
                </div>
            </div>
        </div>
    }

    #paging(range, carouselId) {
        return <>
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" data-bs-target={`#${carouselId}`} data-bs-slide="prev">Previous</a></li>
                {range.map((e, i) => <li className="page-item" key={i}>
                    <a className="page-link" data-bs-target={`#${carouselId}`} data-bs-slide-to={i}>{e}</a>
                </li>)}
                <li className="page-item"><a className="page-link" data-bs-target={`#${carouselId}`} data-bs-slide="next">Next</a></li>
            </ul>
        </>
    }

    render() {
        const carouselId = 'carouselProduct';
        let [obj] = this.props['state'];
        let [key, qty] = [1, this.props['qty'] || 3];
        let data = Object.assign([], obj.products);
        let items = [], pagination = [];
        if (!data.length) return;

        if (data.length > qty) {
            items.push(this.#carouselItem(data.splice(0, qty), key, 'active'))
            while (data.length > 0) {
                pagination.push(key++)
                items.push(this.#carouselItem(data.splice(0, qty), key))
            }
            pagination.push(key++)
            items.push(this.#carouselItem(data, key));
        } else items.push(this.#carouselItem(data, key, 'active'));


        return <>
            <h1 className="text-center">{this.props['heading'] || 'List product'}</h1>
            <hr />
            {
                // SHOW PRODUCT
                items.length > 0 &&
                <div id={carouselId} className="carousel slide">
                    <div className="carousel-inner">{items}</div>
                </div>
            }
            {
                // SHOW PAGINATION
                pagination.length > 1 &&
                <nav className="mt-1" aria-label="Page navigation">
                    {this.#paging(pagination, carouselId)}
                </nav>
            }
        </>
    }
}

export default ListProduct