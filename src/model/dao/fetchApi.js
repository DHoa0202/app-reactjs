
const header = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({}) // body data type must match "Content-Type" header
}

const setHeader = (method, data) => {
    return Object.assign(header, { method, body: JSON.stringify(data) })
}

const dao = {
    get: async (url) => (await fetch(url, setHeader('GET'))).json(),
    post: async (url, data) => (await fetch(url, setHeader('POST', data))).json(),
    put: async (url, data) => (await fetch(url, setHeader('PUT', data))).json(),
    del: async (url) => (await fetch(url, setHeader('DELETE'))).json()
}

export {header};
export default dao;
