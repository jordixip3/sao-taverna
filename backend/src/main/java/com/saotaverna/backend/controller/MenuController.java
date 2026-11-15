package com.saotaverna.backend.controller;

import com.saotaverna.backend.model.MenuItem;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MenuController {

    @GetMapping("/menu")
    public List<MenuItem> getMenu() {
        return List.of(
                new MenuItem("Patatas Bravas", "Crujientes patatas con salsa brava casera y alioli", 5.5, null),
                new MenuItem("Calamares a la Romana", "Calamares tiernos rebozados con un toque de limón", 9.0, null),
                new MenuItem("Butifarra a la Parrilla", "Butifarra catalana a la brasa con judías secas", 11.5, null),
                new MenuItem("Coulant de Chocolate", "Bizcocho caliente con corazón de chocolate fundido", 5.0, null),
                new MenuItem("Tiramisú Casero", "Postre italiano con mascarpone, café y cacao", 5.5, null)
        );
    }
}
