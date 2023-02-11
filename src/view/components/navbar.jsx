import React from "react";
import CartOrder from './CartOrder';

class NavBar extends React.Component {

  state = {
    id: 1,
    brand: 'Study ReactJS'
  }

  render() {
    let [obj] = this.props['state'];

    return <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{this.state.brand}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navSupport" aria-controls="navSupport" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navSupport">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/content">Content</a>
              </li>
            </ul>

            {/* Form search */}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                onChange={(evt) => this.setState(
                  { brand: evt.target.value }
                )}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            {
              // Show cart order
              obj.cart.length > 0 &&
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="btn position-relative" data-bs-toggle="offcanvas" data-bs-target="#cartOffCanvas">
                    🛒
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {obj.cart.length}
                    </span>
                  </a>
                </li>
              </ul>
            }
          </div>
        </div>
      </nav>

      {/* Show item ordered */}
      <CartOrder state={this.props['state']} />
    </>
  }
}

export default NavBar