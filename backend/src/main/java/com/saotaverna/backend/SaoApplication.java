package com.saotaverna.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main entry point for the SAÓ Taverna - Botiga Mediterrània Backend.
 *
 * <p>
 *   Spring Boot will start an embedded Tomcat server on port 8080
 *   (or the value you configure via `application.properties`).
 *   The `@SpringBootApplication` annotation enables component scanning,
 *   auto‑configuration, and configuration property support.
 * </p>
 */
@SpringBootApplication
public class SaoApplication {

    public static void main(String[] args) {
        SpringApplication.run(SaoApplication.class, args);
    }
}
