package tharani.dev.invoicegeneratorApi.controller;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import tharani.dev.invoicegeneratorApi.entity.User;
import tharani.dev.invoicegeneratorApi.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public User createOrUpdateUser(@RequestBody User user, Authentication authentication){
        try {
            if(!authentication.getName().equals(user.getClerkId())){
                throw new ResponseStatusException(HttpStatus.FORBIDDEN,"User does not have permission to access this resource");
            }
            return userService.createOrUpdateUser(user);
        } catch( Exception e){
            throw new RuntimeException(e);
        }

    }
}
