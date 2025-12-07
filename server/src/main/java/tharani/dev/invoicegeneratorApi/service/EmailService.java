package tharani.dev.invoicegeneratorApi.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;
    @Value("${spring.mail.properties.mail.smtp.from}")
    private String fromEmail;

    public void sendInvoiceEmail(String toEmail, MultipartFile file) throws MessagingException, IOException {
        if (toEmail == null || toEmail.trim().isEmpty()) {
            throw new IllegalArgumentException("Recipient email address cannot be empty");
        }
        
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("File attachment cannot be empty");
        }
        
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setFrom(fromEmail);
        helper.setTo(toEmail.trim());
        helper.setSubject("Your Invoice");
        helper.setText("Dear customer, \n\nPlease find attached your Invoice. \n\nThank You!");

        String fileName = "invoice_"+System.currentTimeMillis()+".pdf";
        helper.addAttachment(fileName, new ByteArrayResource(file.getBytes()));

        mailSender.send(message);
    }
}
