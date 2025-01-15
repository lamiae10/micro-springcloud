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
