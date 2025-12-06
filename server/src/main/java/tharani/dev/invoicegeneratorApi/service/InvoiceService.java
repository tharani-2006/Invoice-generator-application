package tharani.dev.invoicegeneratorApi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tharani.dev.invoicegeneratorApi.entity.Invoice;
import tharani.dev.invoicegeneratorApi.repository.InvoiceRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InvoiceService {
    private final InvoiceRepository invoiceRepository;

    public Invoice saveInvoice(Invoice invoice){
        return invoiceRepository.save(invoice);
    }

    public List<Invoice> fetchInvoices(){
        return invoiceRepository.findAll();
    }
}
