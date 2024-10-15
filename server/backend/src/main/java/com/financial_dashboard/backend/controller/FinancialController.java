package com.financial_dashboard.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
public class FinancialController {

    @GetMapping("/balances")
    public Map<String, Object> getBalances() throws IOException {

        ObjectMapper mapper = new ObjectMapper();
        Resource resource = new ClassPathResource("balances.json");

        // Read the resource as an InputStream instead of File
        try (InputStream inputStream = resource.getInputStream()) {
            Map<String, Object> balances = mapper.readValue(inputStream, Map.class);
            return balances;
        }
    }
}
