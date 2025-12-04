package tharani.dev.invoicegeneratorApi.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tharani.dev.invoicegeneratorApi.entity.Invoice;
import tharani.dev.invoicegeneratorApi.service.InvoiceService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/invoices")
@CrossOrigin("*")
public class InvoiceController {
    private InvoiceService invoiceService;

    @PostMapping
    public ResponseEntity<Invoice> saveInvoice(@RequestBody Invoice invoice){
         return ResponseEntity.ok(invoiceService.saveInvoice(invoice));
    }
}
