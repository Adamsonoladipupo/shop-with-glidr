package com.productservice.glidr.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private long expiration;

    /**
     * Generates a JWT with custom claims.
     */
    public String generateToken(
            String subject,
            Map<String, Object> claims
    ) {

        return Jwts.builder()

                .claims(claims)

                .subject(subject)

                .issuedAt(new Date())

                .expiration(
                        new Date(System.currentTimeMillis() + expiration)
                )

                .signWith(getSigningKey())

                .compact();

    }

    /**
     * Generates a simple token using only the subject.
     */
    public String generateToken(String subject) {

        return generateToken(subject, Map.of());

    }

    /**
     * Extract username/email.
     */
    public String extractUsername(String token) {

        return extractClaim(
                token,
                Claims::getSubject
        );

    }

    /**
     * Extract expiration.
     */
    public Date extractExpiration(String token) {

        return extractClaim(
                token,
                Claims::getExpiration
        );

    }

    /**
     * Generic claim extractor.
     */
    public <T> T extractClaim(
            String token,
            Function<Claims, T> resolver
    ) {

        Claims claims = extractAllClaims(token);

        return resolver.apply(claims);

    }

    /**
     * Checks if token has expired.
     */
    public boolean isTokenExpired(String token) {

        return extractExpiration(token)
                .before(new Date());

    }

    /**
     * Validates token against username.
     */
    public boolean isTokenValid(
            String token,
            String username
    ) {

        return extractUsername(token)
                .equals(username)
                && !isTokenExpired(token);

    }

    /**
     * Returns all JWT claims.
     */
    private Claims extractAllClaims(String token) {

        return Jwts.parser()

                .verifyWith(getSigningKey())

                .build()

                .parseSignedClaims(token)

                .getPayload();

    }

    /**
     * Returns signing key.
     */
    private SecretKey getSigningKey() {

        return Keys.hmacShaKeyFor(
                secret.getBytes(StandardCharsets.UTF_8)
        );

    }
}
