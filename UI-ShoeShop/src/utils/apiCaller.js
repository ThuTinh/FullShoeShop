import axios from 'axios'
import {API_URL} from '../constants/config'

const _headers={
    'Content-type':'application/json'
}
export default function callApi(endpoint, method = 'GET', data,headers=_headers)
{
    return axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data,
        headers
    }).catch(err=>{
       console.log("Lỗi", err);
    });
}