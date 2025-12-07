import axios from 'axios'

export const saveInvoices = (baseURL , payLoad) => {
    return axios.post(`${baseURL}/invoices`, payLoad)
}

export const getAllInvoices = (baseURL) => {
    return axios.get(`${baseURL}/invoices`)
}

export const deleteInvoice = (baseURL, id) => {
    return axios.delete(`${baseURL}/invoices/${id}`)
}

export const sendInvoice = (baseURL, FormData) => {
    return axios.post(`${baseURL}/invoices/sendinvoice`, FormData)
}