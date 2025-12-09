import {useState,createContext} from 'react'

export const AppContext = createContext()

const initialInvoiceData = {
    title : "New Invoice",
    billing : {name:"",phone:"",address:""},
    shipping : {name:"",phone:"",address:""},
    invoice : {number:"",date:"",dueDate:""},
    account: {name:"",number:"",ifsccode:""},
    company: {name:"",phone:"",address:""},
    tax:0,
    notes: "",
    items: [
        {name:"",qty:"",amount:"",description:"",total:0}
    ],
    logo:""
};

export  const AppProvider = ({ children }) => {

    const [invoiceTitle,setInvoiceTitle] = useState("New Invoice")
    const [invoiceData,setInvoiceData] = useState(initialInvoiceData)
    const [selectedTemplate,setSelectedTemplate] = useState("template1")

    const baseURL = "http://localhost:8089/api"

    const contextValue = {
        invoiceTitle,setInvoiceTitle,
        invoiceData,setInvoiceData,
        setSelectedTemplate,selectedTemplate,
        initialInvoiceData,
        baseURL
    }

    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
