import axios from "axios";

export const uploadInvoiceThumbnail = async (imageData) => {
  try {
    // Convert base64 data URL to Blob
    const base64Data = imageData.split(',')[1] || imageData;
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });
    
    const formData = new FormData();
    formData.append("file", blob, "invoice-thumbnail.png");
    formData.append("upload_preset", 'invoices_thumbnail');
    formData.append("cloud_name", "dmfcpofes");

    const response = await axios.post(`https://api.cloudinary.com/v1_1/dmfcpofes/image/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return "";
  }
}