package tharani.dev.invoicegeneratorApi.controller;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tharani.dev.invoicegeneratorApi.entity.Invoice;
import tharani.dev.invoicegeneratorApi.service.EmailService;
import tharani.dev.invoicegeneratorApi.service.InvoiceService;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/invoices")
public class InvoiceController {
    private final InvoiceService invoiceService;
    private final EmailService emailService;

    @PostMapping
    public ResponseEntity<Invoice> saveInvoice(@RequestBody Invoice invoice){
         return ResponseEntity.ok(invoiceService.saveInvoice(invoice));
    }

    @GetMapping
    public ResponseEntity<List<Invoice>> fetchInvoices(){
        return ResponseEntity.ok(invoiceService.fetchInvoices());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeInvoice(@PathVariable String id){
        invoiceService.removeInvoice(id);
        return  ResponseEntity.noContent().build();
    }
    @PostMapping("/sendinvoice")
    public ResponseEntity<?> sendInvoice(@RequestPart("file") MultipartFile file,
                                         @RequestParam("email") String customerMail){

        try {
            if (customerMail == null || customerMail.trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Email address is required");
            }
            
            emailService.sendInvoiceEmail(customerMail, file);
            return ResponseEntity.ok().body("Invoice Sent Successfully");
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to send invoice: " + e.getMessage());
        }

    }
}
