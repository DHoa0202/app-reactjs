import React from "react";
import { products } from "../../model/utils/data"
import * as prd from "../parts/CardProduct";

class ListProduct extends React.Component {
    render() {
        let state = this.props['state']

        return <>
            <h1 className="text-center">List product</h1>
            <hr />
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item container active">
                        <div className="container">
                            <div className="row g-2" style={{ maxHeight: '80vh', overflow: "auto" }}>
                                {products.slice(0, 3).map(e => <prd.default key={e.id} params={[e, state]} />)}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item container">
                        <div className="row g-2" style={{ maxHeight: '80vh', overflow: "auto" }}>
                            {products.slice(3, 6).map(e => <prd.hrProduct key={e.id} params={[e, state]} />)}
                        </div>
                    </div>
                    <div className="carousel-item container">
                        <div className="row g-2" style={{ maxHeight: '80vh', overflow: "auto" }}>
                            {products.slice(6).map(e => <prd.vrProduct key={e.id} params={[e, state]} />)}
                        </div>
                    </div>
                </div>
            </div>
            <nav className="mt-1" aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" data-bs-target="#carouselExample" data-bs-slide="prev">Previous</a></li>
                    <li className="page-item"><a className="page-link" data-bs-target="#carouselExample" data-bs-slide-to="0">1</a></li>
                    <li className="page-item"><a className="page-link" data-bs-target="#carouselExample" data-bs-slide-to="1">2</a></li>
                    <li className="page-item"><a className="page-link" data-bs-target="#carouselExample" data-bs-slide-to="2">3</a></li>
                    <li className="page-item"><a className="page-link" data-bs-target="#carouselExample" data-bs-slide="next">Next</a></li>
                </ul>
            </nav>
        </>
    }
}

export default ListProduct