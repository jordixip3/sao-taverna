package com.saotaverna.backend.service;

import com.saotaverna.backend.model.ReservationRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class ReservationService {
    private final List<ReservationRequest> reservations = new CopyOnWriteArrayList<>();

    public void add(ReservationRequest request) {
        reservations.add(request);
    }

    public List<ReservationRequest> list() {
        return reservations;
    }
}
