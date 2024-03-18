import axios from 'axios'

// const BASE_URL = 'https://api.exchangerate.host/latest';
const BASE_URL = 'https://open.er-api.com/v6/latest/';

export const converter = (base, date=null) => {
    // let now = date ? date : new Date().toJSON().slice(0,10);
    // let url = BASE_URL + now + '?base=' + base;
    let url = BASE_URL + base;
    return axios.get(url);
}