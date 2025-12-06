import { useRef, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { templates } from '../assets/assets'
import InvoicePreview from '../components/InvoicePreview'
import { saveInvoices } from '../services/invoiceService.js'
import { toast } from 'react-hot-toast'
import { Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import html2canvas from 'html2canvas'
import { uploadInvoiceThumbnail } from '../services/cloudinaryService.js'
import { deleteInvoice } from '../services/invoiceService.js'
import { generatePdfFromElement } from '../services/pdfUtils.js'



const PreviewPage = () => {

  const previewRef = useRef()

  const { selectedTemplate, setSelectedTemplate, invoiceData, baseURL } = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [downloading, setDownloading] = useState(false)

  const handleSaveAndExit = async () => {
    try {

      setLoading(true)

      //to store image in cloudinary
      const canvas = await html2canvas(previewRef.current, { //image
        scale: 2,
        useCORS: true,
        backgroundColor: "#fff",
        scrollY: -window.scrollY,
      });
      const imageData = canvas.toDataURL("image/png");
      const thumbnailUrl = await uploadInvoiceThumbnail(imageData)

      // Clean invoiceData: remove account field and total from items, ensure proper types
      const { account, items, ...rest } = invoiceData
      const cleanedInvoiceData = {
        ...rest,
        company: rest.company || { name: "", phone: "", address: "" },
        billing: rest.billing || { name: "", phone: "", address: "" },
        shipping: rest.shipping || { name: "", phone: "", address: "" },
        invoice: rest.invoice || { number: "", date: "", dueDate: "" },
        items: items?.map(({ total, ...item }) => ({
          name: item.name || "",
          qty: parseInt(item.qty) || 0,
          amount: parseFloat(item.amount) || 0,
          description: item.description || ""
        })) || []
      }

      //store invoice datas in database
      const payLoad = {
        ...cleanedInvoiceData,
        thumbnailUrl,
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
      toast.error("Error saving invoice: " + (error.message || "Failed to save invoice"))
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {

    try {
      const response = await deleteInvoice(baseURL, invoiceData.id)
      if (response.status === 204) {
        toast.success("Invoice deleted successfully")
        navigate('/dashboard')
      } else {
        toast.error("Failed to delete invoice")
      }
    } catch (error) {
      console.error("Error deleting invoice:", error)
      toast.error("Error deleting invoice: " + (error.message || "Failed to delete invoice"))
    }

  }

  const handleDownloadPdf = async () => {
    if (!previewRef.current) return;

    try {
      setDownloading(true);
      await generatePdfFromElement(previewRef.current, `invoice_${Date.now()}.pdf`);
    } catch (error) {
      toast.error("Error generating PDF: " + (error.message || "Failed to generate PDF"));
    }
    finally {
      setDownloading(false);
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
          {invoiceData.id && <button className="btn btn-danger" onClick={handleDelete}>Delete Invoice</button>}
          <button className="btn btn-secondary ">Back to Dashboard</button>
          <button className="btn btn-info">Send Mail</button>
          <button className="btn btn-success d-flex align-items-center justify-content-center" disabled={loading} onClick={handleDownloadPdf}>
            {downloading && <Loader2 className="me-2 spin-animation" size={18} />}
            {downloading ? "Downloading..." : "Download PDF"}
          </button>
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
