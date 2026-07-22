
FROM eclipse-temurin:21-jdk

WORKDIR /app


COPY target/Glidr-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

# Start the application
ENTRYPOINT ["java","-jar","app.jar"]