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

export const sendInvoice = (baseURL, formData) => {
    return axios.post(`${baseURL}/invoices/sendinvoice`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 seconds timeout
    })
}