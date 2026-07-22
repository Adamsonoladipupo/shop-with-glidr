# Glidr

## Overview

Glidr is a retail shopping companion platform designed to make shopping smooth, fast, and friction-free. Inspired by the idea of *gliding*, Glidr enables customers to move effortlessly through their shopping journey—from discovering products to accessing digital receipts and managing shopping lists.

Rather than replacing existing supermarket Point of Sale (POS) systems, Glidr integrates with them to provide customers with a modern digital shopping experience while allowing retailers to continue using their existing infrastructure. The platform bridges the gap between physical retail stores and digital convenience by making product discovery, shopping planning, and customer engagement seamless.

---

## Problem Statement

Shopping in supermarkets can be frustrating due to several common challenges:

- Difficulty locating products within large stores
- Limited visibility into product availability
- Time wasted searching for items
- Lost or damaged paper receipts
- Poor shopping planning
- Limited post-purchase customer engagement

Glidr addresses these challenges by connecting customers directly to supermarket inventory and purchase information through an intuitive mobile application.

---

## Features

### Customer Features

- User Registration
- User Authentication (JWT)
- Secure Login
- Product Search & Discovery
- Shopping Lists
- Digital Receipts *(In Progress)*
- Customer Profile
- Shopping Cart *(In Progress)*

### Retail Features *(Upcoming)*

- Retail Store Registration
- POS Integration
- Inventory Synchronization
- Customer Analytics
- Digital Customer Engagement
- Inventory Management

---

## System Architecture

Glidr currently follows a layered architecture consisting of:

- Mobile Application (React Native)
- REST API Backend (Spring Boot)
- MongoDB Atlas Database
- Cloud Infrastructure (AWS EC2)

Current architecture:

```text
                React Native (Expo)
                        │
                        │ REST API
                        ▼
            Spring Boot Backend (Java)
                        │
                Spring Data MongoDB
                        │
                        ▼
                 MongoDB Atlas
```

Future architecture will introduce an event-driven integration layer using Apache Kafka for real-time communication with retail POS systems.

```text
            React Native Mobile App
                     │
              Spring Boot API
                     │
              Apache Kafka
                     │
        POS Integration Services
                     │
         Supermarket POS Systems
```

---

## Technology Stack

### Mobile Application

- React Native
- Expo SDK 56
- Expo Router
- TypeScript
- AsyncStorage
- Fetch API

### Backend

- Java 21
- Spring Boot 4.1.0
- Spring Data MongoDB
- Spring Validation
- JWT Authentication
- Maven

### Database

- MongoDB Atlas

### Cloud & DevOps

- AWS EC2
- Docker
- Docker Hub

### Planned Infrastructure

- Apache Kafka
- GitHub Actions
- Let's Encrypt SSL

---

## Authentication

Glidr currently supports:

- User Registration
- User Login
- JWT Token Authentication
- Persistent Authentication using AsyncStorage
- Protected API Endpoints

---

## POS Integration

Glidr is designed to integrate with existing supermarket POS systems rather than replacing them.

The first planned integration target is:

- TracePOS

Future releases will support additional POS providers through REST APIs and event-driven communication using Apache Kafka.

---

## Deployment

### Backend

The backend is deployed on **AWS EC2** and uses **MongoDB Atlas** as its cloud database.

The application has been fully containerized using Docker for simplified deployment and scalability.

### Docker Image

The backend Docker image is publicly available.

Pull the image:

```bash
docker pull adamsonsemicolon/glidr-backend:1.0.0
```

Run the container:

```bash
docker run -d \
  --name glidr-backend \
  -p 8080:8080 \
  -e MONGODB_URI=<your-mongodb-uri> \
  -e SERVER_PORT=8080 \
  -e KAFKA_BOOTSTRAP_SERVERS=localhost:9092 \
  --restart unless-stopped \
  adamsonsemicolon/glidr-backend:1.0.0
```

---

## Mobile Application

The latest Android APK is available for testing via Expo.

**Download APK**

https://expo.dev/artifacts/eas/m5K8S9rcl9NoKVefBCIMy5hnHBj_SVXYZg4B2m9MKLA.apk

---

## Project Structure

```text
glidr
│
├── glidr-backend
│   ├── Spring Boot
│   ├── REST APIs
│   ├── MongoDB
│   └── Docker
│
└── glidr-frontend
    └── apps
        └── glidr-mobile-app
            ├── Expo
            ├── React Native
            └── TypeScript
```

---

## Current Development Status

### Completed

- User Registration
- User Authentication
- JWT Security
- Mobile Authentication Flow
- MongoDB Atlas Integration
- Dockerized Backend
- Docker Hub Image
- AWS EC2 Deployment
- REST API Development
- React Native Mobile Application
- Mobile ↔ Backend Integration
- Android APK Build

### In Progress

- Customer Profile
- Shopping Cart
- Product APIs
- Category APIs
- Store APIs
- Inventory Integration

### Planned

- Retail Store Registration
- POS Integration
- Apache Kafka Event Streaming
- Digital Receipts
- Wishlist
- Orders
- Notifications
- Indoor Store Navigation
- Shopping Route Optimization
- Personalized Product Recommendations

---

## Roadmap

### Phase 1

- Customer Authentication
- Product Discovery
- Shopping Lists
- Mobile Application MVP

### Phase 2

- Retail Store Accounts
- Inventory Synchronization
- POS Integration
- Product Availability
- Digital Receipts

### Phase 3

- Event-Driven Architecture
- Customer Analytics
- Smart Shopping Recommendations
- Indoor Navigation
- Multi-POS Support

---

## Vision

To become the digital companion for physical retail shopping by connecting customers with supermarket inventory, digital receipts, and personalized shopping experiences while leveraging existing retail infrastructure.

Our long-term vision is to make supermarket shopping as effortless as possible by eliminating friction at every stage of the customer journey.

---

## Developers

Developed by:

- **Adamson Oladipupo**  
  https://github.com/Adamsonoladipupo

- **Nelly**  
  https://github.com/nelly439

---

## License

This project is currently under active development as part of a software engineering capstone project. Licensing information will be added prior to public release.
