import React from "react"
import axios from "axios";

class LoginForm extends React.Component {

  #login = (evt) => {
    evt.preventDefault();

    const url = 'http://localhost:8080/api/accounts/login';
    const [data, setToken] = this.props['token'];
    const user = this.state;
    const config = {
      headers: {
        authorization: data?.accessToken,
        'Content-Type': 'application/json'
        // multipart/form-data || application/x-www-form-urlencoded
      }
    }

    axios.post(url, user, config)
      .then(r => setToken(r.data))
      .catch(e => console.error(e));
  }

  #showPass = (evt, id) => {
    let inp = document.getElementById(id);
    if (inp.type == 'password') {
      inp.type = 'text'
      evt.target.innerText = '👁'
    } else {
      inp.type = 'password';
      evt.target.innerText = '💤'
    }
  }

  #dataHandle = (evt) => {
    let inp = evt.target;
    this.setState(
      { [inp.name || inp.id]: inp.value },
      // () => console.log(this.state)
    )
  }

  render() {
    return <>
      <form className="p-3 w-50 m-auto border rounded-3" onSubmit={this.#login}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" onChange={this.#dataHandle} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="input-group mb-3">
            <input type="password" className="form-control" id="password" onChange={this.#dataHandle} />
            <span className="input-group-text" onClick={(evt) => this.#showPass(evt, 'password')}>💤</span>
          </div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" onChange={this.#dataHandle}
          />
          <label className="form-check-label" htmlFor="rememberMe">Check me out</label>
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  }
}

export default LoginForm