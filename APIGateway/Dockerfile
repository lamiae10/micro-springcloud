# Utiliser l'image officielle de OpenJDK
FROM openjdk:17-jdk-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le JAR construit dans le conteneur
COPY target/apigateway-0.0.1-SNAPSHOT.jar /app/apigateway.jar

# Exposer le port du microservice
EXPOSE 8082

# Exécuter l'application Spring Boot
ENTRYPOINT ["java", "-jar", "apigateway.jar"]
