package com.saotaverna.backend.controller;

import com.saotaverna.backend.model.ReservationRequest;
import com.saotaverna.backend.service.ReservationService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ReservationController {
    private final ReservationService service;
    public ReservationController(ReservationService service) {
        this.service = service;
    }

    @PostMapping("/reservations")
    public void addReservation(@RequestBody ReservationRequest request) {
        service.add(request);
    }

    @GetMapping("/reservations")
    public List<ReservationRequest> getAll() {
        return service.list();
    }
}
