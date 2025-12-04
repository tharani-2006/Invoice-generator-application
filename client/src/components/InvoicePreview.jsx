import { forwardRef } from "react"
import Template1 from "../templates/Template1/Template1"
import Template2 from "../templates/Template2/Template2"
import Template3 from "../templates/Template3/Template3"
import Template4 from "../templates/Template4/Template4"
import Template5 from "../templates/Template5/Template5"
import { formatInvoiceData } from "../util/formatInvoiceData"

const InvoicePreview = forwardRef(({invoiceData, template}, ref) => {

    const formattedData = formatInvoiceData(invoiceData)

    const renderTemplate = () => {
        switch(template) {
            case "template1":
                return <Template1 data={formattedData} />
            case "template2":
                return <Template2 data={formattedData} />
            case "template3":
                return <Template3 data={formattedData} />
            case "template4":
                return <Template4 data={formattedData} />
            case "template5":
                return <Template5 data={formattedData} />
            default:
                return <Template1 data={formattedData} />
        }
    }

    return (
        <div ref={ref} className="invoice-preview container px-2 py-2 overflow-x-auto">
            {renderTemplate()}
        </div>
    )
})
export default InvoicePreview