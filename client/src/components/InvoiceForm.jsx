import React, { use, useContext } from 'react'
import { assets } from '../assets/assets.js'
import { Trash2 } from 'lucide-react'
import { AppContext } from '../context/AppContext.jsx'

const InvoiceForm = () => {

    const { invoiceData, setInvoiceData } = useContext(AppContext)

    const addItem = () => {
        setInvoiceData((prev) => ({
            ...prev,
            items: [
                ...prev.items,
                { name: "", qty: "", amount: "", description: "", total: 0 },
            ]
        }))
    }

    const deleteItem = (index) => {
        const items = invoiceData.items.filter((_, i) => i !== index)
        setInvoiceData((prev) => ({ ...prev, items }));
    }

    const handleChange = (section, field, value) => {
        setInvoiceData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value }
        }))
    }

    const handleSameAsBilling = () => {
        setInvoiceData((prev) => ({
            ...prev,
            skipping: {...prev.billing}
        }))
    }

    return (
        <div className="invoiceform container py-4">

            {/* Company Logo */}
            <div className="mb-4">
                <h5>Company Logo</h5>
                <div className="d-flex align-items-center gap-3">
                    <label htmlFor="image" className="form-label">
                        <img src={assets.upload_area} alt="upload" width={98} />
                    </label>
                    <input type="file" name="logo" id="image" hidden className='form-control' accept='image/*' />
                </div>
            </div>

            {/* Company info */}
            <div className="mb-4">
                <h5>Your Company</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Company Name'
                            onChange={(e) => handleChange("company", "name", e.target.value)}
                            value={invoiceData.company.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Company Phone'
                            onChange={(e) => handleChange("company", "phone", e.target.value)}
                            value={invoiceData.company.phone}
                        />
                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Company Address'
                            onChange={(e) => handleChange("company", "address", e.target.value)}
                            value={invoiceData.company.address}
                        />
                    </div>
                </div>
            </div>

            {/* bill to */}
            <div className="mb-4">
                <h5>Bill To</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='Name' 
                            onChange={(e) => handleChange("billing","name",e.target.value)}
                            value={invoiceData.billing.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='Phone Number' 
                            onChange={(e) => handleChange("billing","phone",e.target.value)}
                            value={invoiceData.billing.phone}
                        />
                    </div>
                    <div className="col-md-12">
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='Address' 
                            onChange={(e) => handleChange("billing","address",e.target.value)}
                            value={invoiceData.billing.address}
                        />
                    </div>
                </div>
            </div>

            {/* ship to */}
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5>Ship To</h5>
                    <div className="form-check">
                        <input type="checkbox" className='form-check-input' id='sameAsBilling' onChange={handleSameAsBilling} />
                        <label htmlFor="sameAsBilling" className="form-check-label">
                            Same as Billing
                        </label>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='Name' 
                            onChange={(e) => handleChange("skipping","name",e.target.value)}
                            value={invoiceData.skipping.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='Phone Number' 
                            onChange={(e) => handleChange("skipping","phone",e.target.value)}
                            value={invoiceData.skipping.phone}
                        />
                    </div>
                    <div className="col-md-12">
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder=' Shipping Address' 
                            onChange={(e) => handleChange("skipping","address",e.target.value)}
                            value={invoiceData.skipping.address}
                        />
                    </div>
                </div>
            </div>

            {/* invoice inf0 */}
            <div className="mb-4">
                <h5>Invoice Information</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="invoiceNumber" className="form-label">Invoice Number</label>
                        <input type="text" disabled id='invoiceNumber' className='form-control' placeholder='Invoice Number' />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiscDate" className="form-label">Invoice Date</label>
                        <input type="date" className='form-control' id='invoiceDate' />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDueDate" className="form-label">Invoice Due Date</label>
                        <input type="date" className='form-control' id='invoiceDueDate' />
                    </div>
                </div>
            </div>

            {/* item details */}
            <div className="mb-4">
                <h5>Item Details</h5>
                {invoiceData.items.map((item, index) => (
                    <div key={index} className="card p-3 md-3">
                        <div className="row g-3 mb-2">
                            <div className="col-md-3">
                                <input type="text" className='form-control' placeholder='Item Name' />
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" placeholder='qty' />
                            </div>
                            <div className="col-md-3">
                                <input type="number" placeholder='Amount' className='form-control' />
                            </div>
                            <div className="col-md-3">
                                <input type="number" placeholder='Total' className='form-control' />
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <textarea placeholder='Description' className="form-control"></textarea>
                            {invoiceData.items.length > 1 && (
                                <button className="btn btn-outline-danger" type='button' onClick={() => deleteItem(index)}>
                                    <Trash2 size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <button className="btn btn-primary mt-3" type='button' onClick={addItem}>Add Item</button>
            </div>

            {/* Bank account info */}
            <div className="mb-4">
                <h5>Bank Account Details</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <input type="text" className='form-control' placeholder='Account Name' />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className='form-control' placeholder='Account Number' />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className='form-control' placeholder='Branch/IFSC Code' />
                    </div>
                </div>
            </div>

            {/* Totals */}
            <div className="mb-4">
                <h5>Totals</h5>
                <div className="d-flex justify-content-end">
                    <div className="w-100 w-md-50">
                        <div className="d-flex justify-content-between">
                            <span>SubTotal</span>
                            <span>${1000.00}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <label htmlFor="taxInput" className="me-2">Tax Rate(%)</label>
                            <input type="number" name="" id="taxInput" className='form-control text-end w-50' placeholder='2' />
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Tax Amount</span>
                            <span>${1000.00}</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 fw-bold">
                            <span>Grand Amount</span>
                            <span>${1000.00}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notes */}
            <div className="mb-4">
                <h5>Notes:</h5>
                <textarea name="notes" className='form-control' rows={3} ></textarea>
            </div>
        </div>
    )
}

export default InvoiceForm
