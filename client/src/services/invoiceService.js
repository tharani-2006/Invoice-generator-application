import axios from 'axios'

export const saveInvoices = (baseURL , payLoad) => {
    return axios.post(`${baseURL}/invoices`, payLoad)
}

export const getAllInvoices = (baseURL) => {
    return axios.get(`${baseURL}/invoices`)
}
