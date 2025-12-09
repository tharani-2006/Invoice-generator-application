import axios from 'axios'

export const saveInvoices = (baseURL , payLoad, token) => {
    return axios.post(`${baseURL}/invoices`, payLoad, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }) 
}

export const getAllInvoices = (baseURL, token) => {
    return axios.get(`${baseURL}/invoices`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteInvoice = (baseURL, id, token) => {
    return axios.delete(`${baseURL}/invoices/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const sendInvoice = (baseURL, formData,token) => {
    return axios.post(`${baseURL}/invoices/sendinvoice`, formData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}