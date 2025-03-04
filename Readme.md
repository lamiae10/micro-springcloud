projet réalisé par : Lamiae Elhazzaz et Ayman El Afari

Application de Gestion des Livres Basée sur les Microservices
Description

Ce projet est une application basée sur une architecture de microservices, conçue pour gérer les opérations d'un restaurant. Elle utilise des principes modernes de développement logiciel, notamment la conteneurisation avec Docker, Spring Boot pour les microservices backend, et une base de données MySQL. Chaque service est indépendant, hautement modulaire, et communique efficacement via une API Gateway.

Fonctionnalités

Architecture Microservices : Services séparés pour la gestion des produits, des commandes, et une passerelle API.
Gestion de Base de Données : Base de données MySQL centralisée pour la persistance des données.
Conception Évolutive : Les microservices sont conteneurisés avec Docker, garantissant évolutivité et facilité de déploiement.
Interface Utilisateur Interactive : Développée avec React, avec une conception intuitive et une pagination pour la liste des produits.
Persistance des Données : Hibernate ORM pour les interactions avec la base de données.
Routage via Gateway : Utilisation de Spring Cloud Gateway pour le routage des API et l'équilibrage de charge.
Animations Personnalisées : Interactions utilisateur fluides grâce à des transitions CSS.

Technologies Utilisées

Backend

Spring Boot : Pour développer des microservices robustes.
Spring Data JPA : Pour les interactions avec la base de données.
Spring Cloud Gateway : Pour le routage des API.
MySQL : Base de données relationnelle.
Hibernate : ORM pour mapper les objets Java aux entités de la base de données.

Frontend

React.js : Pour construire l'interface utilisateur avec des composants comme antd pour une meilleure expérience.
Ant Design : Composants React préconçus pour un design amélioré.
DevOps
Docker : Conteneurisation des microservices.
Docker Compose : Pour gérer les applications multi-conteneurs.
Architecture du Système
Microservice Commandes : Gestion des commandes.
Microservice Produits : Gestion des inventaires produits.
API Gateway : Communication entre les services.

Base de Données MySQL : Base de données relationnelle partagée par tous les microservices.

![Capture d’écran 2025-01-15 à 17 23 08](https://github.com/user-attachments/assets/82490fac-4020-4771-849e-39d10ae006e7)
![Capture d’écran 2025-01-15 à 17 23 14](https://github.com/user-attachments/assets/217314dd-71e2-4b63-b089-695bad80b42f)
![Capture d’écran 2025-01-15 à 17 23 26](https://github.com/user-attachments/assets/e0484fa2-3bb2-40ca-85c5-58db0b34f53f)
![Capture d’écran 2025-01-15 à 17 23 32](https://github.com/user-attachments/assets/4f79d120-bded-4419-8b66-f4ed6e3a4639)
![Capture d’écran 2025-01-15 à 17 23 47](https://github.com/user-attachments/assets/9075fb3d-20ab-4744-8a45-61f201f0654f)
![Capture d’écran 2025-01-15 à 17 22 46](https://github.com/user-attachments/assets/2f84d5be-97f3-44b2-854a-33633c81de5a)



