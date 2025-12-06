import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const generatePdfFromElement = async (element, fileName = "invoice.pdf", returnBlob = false) => {

    const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#FFFFFF",
        scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/jpeg");

    // Create PDF instance
    const pdf = new jsPDF("p", "pt", "a4");

    // Get image properties
    const imgProps = pdf.getImageProperties(imgData);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

    if (returnBlob) {
        return pdf.output("blob");
    } else {
        pdf.save(fileName);
    }
};
