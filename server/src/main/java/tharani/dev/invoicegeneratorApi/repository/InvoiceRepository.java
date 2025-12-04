package tharani.dev.invoicegeneratorApi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import tharani.dev.invoicegeneratorApi.entity.Invoice;

public interface InvoiceRepository extends MongoRepository<Invoice, String> {

}
