package tharani.dev.invoicegeneratorApi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tharani.dev.invoicegeneratorApi.entity.Invoice;
import tharani.dev.invoicegeneratorApi.repository.InvoiceRepository;

@Service
@RequiredArgsConstructor
public class InvoiceService {
    private InvoiceRepository invoiceRepository;

    public Invoice saveInvoice(Invoice invoice){
        return invoiceRepository.save(invoice);
    }
}
