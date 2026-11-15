package com.saotaverna.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InfoController {

    @GetMapping("/api/info")
    public CafeInfo getInfo() {
        return new CafeInfo(
                "Carrer de Sant Joan, 35, Calella",
                "+34 931 973 067",
                "Diumenge‑Dijous: 09:00‑23:00, Divendres‑Dissabte: 09:00‑00:00",
                "Benvinguts a SAÓ Taverna - Botiga Mediterrània!"
        );
    }

    // Simple DTO for JSON serialization
    static class CafeInfo {
        private final String address;
        private final String phone;
        private final String openingHours;
        private final String description;

        public CafeInfo(String address, String phone, String openingHours, String description) {
            this.address = address;
            this.phone = phone;
            this.openingHours = openingHours;
            this.description = description;
        }

        public String getAddress() { return address; }
        public String getPhone() { return phone; }
        public String getOpeningHours() { return openingHours; }
        public String getDescription() { return description; }
    }
}
