package com.financial_dashboard.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.File;
import java.util.Map;

@RestController
public class FinancialController {

    @GetMapping("/balances")
    public Map<String, Object> getBalances() throws IOException {

        ObjectMapper mapper = new ObjectMapper();
        Resource resource = new ClassPathResource("balances.json");
        File account_data = resource.getFile();

        Map<String, Object> balances = mapper.readValue(account_data,Map.class);

        return balances;
    }
}
