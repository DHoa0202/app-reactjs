import React from "react";
import { categories } from "../../model/utils/data";

class FilterProduct extends React.Component {

    render() {
        return <React.Fragment>
            <h1 style={{ textAlign: "center" }}>Filter</h1>
            <hr />
            <div className="accordion" id="listProducts">
                {/* Categories */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Categories
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#listProducts">
                        <div className="accordion-body overflow-auto d-flex gap-3">
                            <ul className="w-100 list-group list-group-flush">
                                {categories.map(e => <li className="list-group-item" key={e.id}>
                                    <button className="btn p-0">{e.name}</button>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Search form */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Search form
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#listProducts">
                        <div className="accordion-body overflow-auto d-flex gap-3">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                    onChange={(evt) => this.setState(
                                        { search: evt.target.value }
                                    )}
                                />
                                <button className="btn btn-outline-success" type="button">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default FilterProduct;