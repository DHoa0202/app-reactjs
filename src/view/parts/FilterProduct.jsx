import React from "react";
import { sort } from '../../model/utils/util'
import { categories, products } from "../../model/utils/data";

const setPermClass = (element, parent, className) => {
    let txt = element.getAttribute('class');
    let selected = txt.indexOf(className) > -1;
    let temp = parent.getElementsByClassName('active');

    for (let child of temp) child.setAttribute('class', txt)
    if (selected) element.setAttribute('class', txt.replace(className, ''))
    else element.setAttribute('class', txt.replace(className, '') + className)
    return !selected;
}

const keysOrderBy = [
    { id: 'name', name: 'Ascending name' },
    { id: 'price', name: 'Ascending price' },
    { id: '-name', name: 'descending name' },
    { id: '-price', name: 'descending price' }
]

class FilterProduct extends React.Component {

    state = {
        search: undefined,
        orderBySelected: false,
        categorySelected: false
    }

    #searchHandle = (evt) => {
        evt.preventDefault();
        var data = !this.state.search ? products :
            products.filter(e => JSON.stringify(e).includes(this.state.search));
        this.#handleState(data);
    }

    #orderByHandle = (evt) => {
        var data, [state] = this.props['state'];
        let selected = setPermClass(evt.target, evt.target.parentElement, ' active');
        let key = evt.target.getAttribute('value');

        data = state['products'];
        sort.dinamic(data, selected ? key : 'id')

        this.setState({ orderBySelected: key || selected });
        this.#handleState(data);
    }

    #handleCateFilter = (evt) => {
        // set class active on list-items to show style display
        // setPermClass(evt.target, document.querySelector(`#listGroupOrderBy${randomId}`), '')

        var data = products;
        let selected = setPermClass(evt.target, evt.target.parentElement, ' active');

        if (this.state.orderBySelected) sort.dinamic(data, this.state.orderBySelected)
        if (selected) data = data.filter(e => e.category_id == evt.target.value);

        this.setState({ categorySelected: evt.target.value || selected })
        this.#handleState(data);
    }

    #handleState(data) {
        let [obj, setState] = this.props['state'];
        obj.products = data;
        setState(Object.assign({}, obj)) // {...obj}
    }

    render() {
        const randomId = Math.floor(Math.random() * 8888)

        return <React.Fragment>
            <h1 className="text-center">{this.props['heading'] || 'Filter'}</h1>
            <hr />
            <div className="accordion" id={`accordionFilter${randomId}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`headingOne${randomId}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseSearch${randomId}`}
                            aria-expanded="true" aria-controls={`collapseSearch${randomId}`}>
                            Search like keywords
                        </button>
                    </h2>
                    <div id={`collapseSearch${randomId}`} className="accordion-collapse collapse show" aria-labelledby={`headingOne${randomId}`}
                        data-bs-parent={`#accordionFilter${randomId}`}>
                        <div className="accordion-body overflow-auto d-flex gap-3">
                            <form className="d-flex w-100" role="search" onSubmit={(evt) => this.#searchHandle(evt)}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                                    data-bs-target="#carouselProduct" data-bs-slide-to={0}
                                    onChange={(evt) => this.setState(
                                        { search: evt.target.value }
                                    )}
                                />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* ORDER BY */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`headingOrderBy${randomId}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOrderBy${randomId}`}
                            aria-expanded="false" aria-controls={`collapseOrderBy${randomId}`}>
                            Order by
                        </button>
                    </h2>
                    <div id={`collapseOrderBy${randomId}`} className="accordion-collapse collapse" aria-labelledby={`headingOrderBy${randomId}`}
                        data-bs-parent={`#accordionFilter${randomId}`}>
                        <div className="accordion-body">
                            <ul className="list-group" id={`listGroupOrderBy${randomId}`}>
                                {keysOrderBy.map(e =>
                                    <li className="list-group-item" data-bs-target="#carouselProduct" data-bs-slide-to={0} key={e.id}
                                        value={e.id} style={{ cursor: 'pointer' }} onClick={(evt) => this.#orderByHandle(evt)}
                                    >{e.name}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CATEGORIES */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`headingCategory${randomId}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseCategory${randomId}`}
                            aria-expanded="false" aria-controls={`collapseCategory${randomId}`}>
                            Filter by category
                        </button>
                    </h2>
                    <div id={`collapseCategory${randomId}`} className="accordion-collapse collapse" aria-labelledby={`headingCategory${randomId}`}
                        data-bs-parent={`#accordionFilter${randomId}`}>
                        <div className="accordion-body overflow-auto d-flex gap-3">
                            <ul className="w-100 list-group list-group-flush" id={`listGroupCategory${randomId}`}>
                                {categories.map(e =>
                                    <li className="list-group-item" key={e.id}
                                        data-bs-target="#carouselProduct" data-bs-slide-to={0}
                                        value={e.id} style={{ cursor: 'pointer' }} onClick={(evt) => this.#handleCateFilter(evt)}
                                    >{e.name}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    }
}

export default FilterProduct;