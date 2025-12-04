export const formatInvoiceData = (invoiceData) => {
    const {
        title,
        company = {},
        invoice = {},
        account = {},
        billing = {},
        skipping = {},
        tax = 0,
        notes ="",
        items = [],
        logo = "" 
    } = invoiceData || {};

    const currencySymbol = '$';
    const subtotal = items.reduce((acc,item) => acc + ((Number(item.qty) || 0) * (Number(item.amount) || 0)) , 0);
    const taxAmount = subtotal * (Number(tax) / 100);
    const total = subtotal + taxAmount;
    
    return {
        title,
        companyName : company.name || "",
        companyAddress : company.address || "",
        companyPhone : company.phone || "",
        companyLogo: logo,

        invoiceNumber : invoice.number || "",
        invoiceDate : invoice.date || "",
        paymentDate : invoice.dueDate || "",

        accountName : account.name || "",
        accountNumber : account.number || "",
        accountIfscCode : account.ifsccode || "",

        billingName : billing.name || "",
        billingAddress : billing.address || "",
        billingPhone : billing.phone || "",

        shippingName : skipping.name || "",
        shippingAddress : skipping.address || "",
        shippingPhone : skipping.phone || "",

        currencySymbol,
        items,
        tax: Number(tax) || 0,
        subtotal,
        taxAmount,
        total,
        notes
    };
}