package com.productservice.glidr.pos;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class PosClientResolver {
    private final Map<String, PosClient> clientsByProvider;

    public PosClientResolver(List<PosClient> clients) {
        this.clientsByProvider = clients.stream()
                .collect(Collectors.toMap(PosClient::providerName, Function.identity()));
    }

    public PosClient resolve(String provider) {
        PosClient client = clientsByProvider.get(provider);
        if (client == null) {
            throw new IllegalArgumentException("No PosClient registered for provider: " + provider);
        }
        return client;
    }
}
