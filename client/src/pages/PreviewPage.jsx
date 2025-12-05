import React, { use } from 'react'
import { useRef, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { templates } from '../assets/assets'
import InvoicePreview from '../components/InvoicePreview'
import { saveInvoices } from '../services/invoiceService.js'
import { toast } from 'react-hot-toast'
import { Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PreviewPage = () => {

  const previewRef = useRef()

  const { selectedTemplate, setSelectedTemplate, invoiceData, baseURL } = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSaveAndExit = async () => {
    try {
      setLoading(true)
      //TODO: create thumbnail url //pending
      const payLoad = {
        ...invoiceData,
        template: selectedTemplate,
      }
      const response = await saveInvoices(baseURL, payLoad)
      if (response.status === 200) {
        toast.success("Invoice saved successfully")
        navigate('/dashboard')
      } else {
        toast.error("Failed to save invoice")
      }
    } catch (error) {
      console.error("Error saving invoice:", error)
      toast.error("Error saving invoice", error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=" previewpage container-fluid d-flex flex-column p-3 min-vh-100">

      {/* Action Buttons */}
      <div className="d-flex flex-column align-items center mb-4 gap-3">

        {/* List of template buttons */}
        <div className="d-flex gap-2 justify-content-center flex-wrap">
          {templates.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setSelectedTemplate(id)}
              style={{ minWidth: '100px', height: '38px' }}
              className={`btn btn-small rounded-pill p-2 ${selectedTemplate === id ? 'btn-warning' : 'btn-outline-secondary'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* List of action buttons */}
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          <button className="btn btn-primary d-flex align-items-center justify-content-center" onClick={handleSaveAndExit} disabled={loading} >
            {loading && <Loader2 className="me-2 spin-animation" size={18} />}
            {loading ? "Saving..." : "Save & Exit"}
          </button>
          <button className="btn btn-danger">Delete Invoice</button>
          <button className="btn btn-secondary ">Back to Dashboard</button>
          <button className="btn btn-info">Send Mail</button>
          <button className="btn btn-success d-flex align-items-center justify-content-center">Download PDF</button>
        </div>

      </div>

      {/* Display the invoice preview */}
      <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-start bg-light py-3">

        <div ref={previewRef} className='invoice-preview'>
          <InvoicePreview invoiceData={invoiceData} template={selectedTemplate} />
        </div>

      </div>

    </div>
  )
}

export default PreviewPage
