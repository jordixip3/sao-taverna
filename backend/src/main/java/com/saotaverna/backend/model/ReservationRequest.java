package com.saotaverna.backend.model;

public class ReservationRequest {
    private String name;
    private String email;
    private String phone;
    private String date; // ISO string e.g., 2026-07-01
    private String time; // HH:mm
    private int guests;

    public ReservationRequest() {}

    public ReservationRequest(String name, String email, String phone, String date, String time, int guests) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.time = time;
        this.guests = guests;
    }

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }
    public int getGuests() { return guests; }
    public void setGuests(int guests) { this.guests = guests; }
}
