---
title: "Projet – Gestion des salles d'un batiment de recherche"
description: "Développement d'une solution web et API de gestion et visualisation des capteurs du bâtiment C pour la SAÉ 3.01 du BUT2 Informatique IUT de Blagnac"
heroImage: "/project/recherche/image.png"
---

## Résumé du projet & ma contribution

Dans le cadre de la SAÉ 3.01, j'ai participé au développement d'un site web permettant de visualiser en temps réel l’état des salles du bâtiment C, à partir des données récoltées par divers capteurs.  
J’ai activement contribué à :
- La conception de l’API Python connectée à une base InfluxDB
- L’intégration temps réel des capteurs (température, humidité, état portes…)
- La création d’une interface utilisateur permettant la navigation avec une carte interactive, la consultation d’historiques graphique, et l’accès rapide aux informations clés
- La gestion du projet en équipe (organisation agile, sprints hebdomadaires, comptes-rendus, documentation)

Ce projet m’a permis de perfectionner mes compétences en développement backend, intégration de bases temporelles, API REST, gestion d’équipe et documentation technique.

---

## Gestion de projet & qualité

- **Organisation par sprints** (1,5 semaine chacun), releases à chaque fin de sprint sur GitHub
- **Version actuelle :** v2.0.0

### Documentation

- [Documentation technique](#)
- [Documentation utilisateur](#)

### Suivi des User Stories

| User Story | Étape | % restant |
|------------|-------|-----------|
| Visualisation en temps réel de l'état des salles | Terminé | 0% |
| Consultation de l'historique de l'état des salles | Terminé | 0% |
<!-- Ajoute ici les autres US selon l'avancement réel -->

### ODJs et comptes-rendus

| Ordres du Jour      | Comptes-rendus     |
|---------------------|--------------------|
| ODJ 07-01-2025      | CR 07-01-2025      |
| ODJ 14-01-2025      | CR 14-01-2025      |
| ODJ 16-01-2025      | CR 16-01-2025      |
| ODJ 17-01-2025      | CR 17-01-2025      |
| ODJ 22-01-2025      | CR 22-01-2025      |


*Tutrice et tuteurs : Cassandre Vey, Remi Boulle, Esther Pendaries*

---

## Contexte et objectifs

La demande : développer un site web et une API Python pour centraliser les données des capteurs du bâtiment C (température, humidité, état des portes…).  
L’objectif principal est de proposer une cartographie interactive en temps réel et un historique graphique détaillant l’évolution des paramètres sur différentes périodes.

**Contraintes techniques et fonctionnelles :**
- Utilisation d'une base **InfluxDB**
- Développement d'une API permettant requêtes et filtrage avancé
- Utilisation obligatoire de **Python** (ou un framework Python adapté)
- Interface utilisateur explicite, ergonomique et pédagogique

---

## Principales réalisations

- Mise en place de la base de données InfluxDB et du schéma de stockage
- Développement de l’API Python (requêtes filtrées, routes dédiées, robustesse)
- Récupération automatisée des données capteurs
- Construction du front web avec affichage cartographique, historique sous forme de graphiques et alertes en temps réel
- Documentation des choix, du code, et tutoriels d’installation pour les futurs mainteneurs

---

## Liens utiles

- [Cours Moodle sur la SAE](#)
- [Dépôt template de base](#)
- [Lien Classroom](#)
- [Documentation complète](#)

---

**Compétences mobilisées sur ce projet :**
- Développement web : Python (API, FastAPI ou Flask)
- Intégration InfluxDB, gestion de données temporelles
- Affichage et visualisation de données temps réel
- Organisation Agile : sprints, backlog, réunions d’équipe, CR
- Documentation technique et utilisateur