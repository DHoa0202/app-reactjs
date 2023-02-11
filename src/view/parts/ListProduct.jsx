import React from "react";
import * as prd from "./CardProduct";

class ListProduct extends React.Component {

    #paging(range) {
        return <>
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" data-bs-target="#carouselProduct" data-bs-slide="prev">Previous</a></li>
                {range.map((e, i) => <li className="page-item" key={i}>
                    <a className="page-link" data-bs-target="#carouselProduct" data-bs-slide-to={i}>{e}</a>
                </li>)}
                <li className="page-item"><a className="page-link" data-bs-target="#carouselProduct" data-bs-slide="next">Next</a></li>
            </ul>
        </>
    }

    #carouselItem(data, key, className) {
        let state = this.props['state']
        let txt = 'carousel-item container';

        return <div className={className ? `${txt} ${className}` : txt} key={key}>
            <div className="container">
                <div className="row g-2" style={{ maxHeight: '80vh', overflow: "auto" }}>
                    {data.map(e => <prd.default key={e.id} params={[e, state]} />)}
                </div>
            </div>
        </div>
    }

    render() {
        let [obj] = this.props['state'];
        let [key, qty] = [1, this.props.qty || 3];
        var data = Object.assign([], obj.products);
        var items = [], pagination = [];
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
            <h1 className="text-center">List product</h1>
            <hr />
            {
                items.length > 0 &&
                <div id="carouselProduct" className="carousel slide">
                    <div className="carousel-inner">{items}</div>
                </div>
            }
            {
                pagination.length > 1 &&
                <nav className="mt-1" aria-label="Page navigation">
                    {this.#paging(pagination)}
                </nav>
            }
        </>
    }
}

export default ListProduct