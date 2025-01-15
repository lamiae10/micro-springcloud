# Utiliser l'image officielle de OpenJDK
FROM openjdk:17-jdk-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le JAR construit dans le conteneur
COPY target/microservice-produit-0.0.1-SNAPSHOT.jar /app/microservice-produit.jar

# Exposer le port du microservice
EXPOSE 8081

# Exécuter l'application Spring Boot
ENTRYPOINT ["java", "-jar", "microservice-produit.jar"]
