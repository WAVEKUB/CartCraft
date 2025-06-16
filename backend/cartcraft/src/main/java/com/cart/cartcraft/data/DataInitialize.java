package com.cart.cartcraft.data;

import com.cart.cartcraft.model.User;
import com.cart.cartcraft.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitialize implements ApplicationListener<ApplicationReadyEvent> {

    private final UserRepository userRepository;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        createDefaultUserIfNotExits();
    }

    private void createDefaultUserIfNotExits() {
        for (int i = 1; i<= 5; i++) {
            String defaultEmail =   "user" + i + "@example.com";
            if (userRepository.existsByEmail(defaultEmail)) {
                continue;
            }
            User user = new User();
            user.setEmail(defaultEmail);
            user.setFirstName("User" + i);
            user.setLastName("LastName" + i);
            user.setPassword("123456");
            userRepository.save(user);
            System.out.println("Default user created: " + user.getEmail());
        }
    }

    @Override
    public boolean supportsAsyncExecution() {
        return ApplicationListener.super.supportsAsyncExecution();
    }
}
