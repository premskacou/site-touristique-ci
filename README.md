# 🇨🇮 AKWABA — Le Guide Touristique & Culturel Ultime de Côte d'Ivoire

![React](https://img.shields.io/badge/React-19-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38BDF8.svg)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4.svg)
![Performance](https://img.shields.io/badge/Performance-Ultra_Fast_⚡-brightgreen.svg)
![i18n](https://img.shields.io/badge/Languages-FR_%7C_EN-gold.svg)

> **AKWABA** est une plateforme web moderne, immersive et ultra-rapide dédiée au tourisme en Côte d'Ivoire. Elle offre une expérience visuelle d'exception, bilingue (Français/Anglais), permettant de découvrir les merveilles naturelles, historiques et gastronomiques éburnéennes.

---

## 🌟 Fonctionnalités Clés

- **7 Destinations Phares** : Abidjan, Yamoussoukro, Assinie-Mafia, Man, Gastronomie & Maquis, Grand-Bassam, et San-Pédro.
- **Galeries FlipCards 3D (Recto/Verso)** : Cartes interactives bilingues présentant les anecdotes, anecdotes culturelles et photos haute définition.
- **Expérience Bilingue (FR / EN)** : Basculement instantané de la langue dans la barre de navigation.
- **Convertisseur de Devises en Temps Réel** : Conversion dynamique des tarifs en **XOF (FCFA)**, **EUR (€)**, et **USD ($)**.
- **Modale de Réservation Interactive** : Formulaire de réservation complet avec pré-sélection automatique de la destination et du guide local certifié.
- **Performances & Vitesse Éclair** : 
  - Dynamic Code-Splitting avec React Lazy & Suspense (bundle initial compressé à 28 KB).
  - Accélération matérielle GPU (`backface-visibility: hidden`) pour garantir 0 surchauffe et 0 ralentissement sur mobile.
  - Chargement différé des images (`loading="lazy"` & `decoding="async"`).
- **Design 100% Responsive & Tactile** : Gestes glisser/swipe optimisés pour mobile et tablette.

---

## 🛠️ Stack Technique

- **Core** : React 19, Vite
- **Styles** : CSS Vanilla, TailwindCSS v4, Google Fonts (*Plus Jakarta Sans*)
- **Animations** : Framer Motion (Accéléré par GPU)
- **Icônes** : Lucide React

---

## 🚀 Installation & Lancement

```bash
# 1. Cloner le projet
git clone https://github.com/VOTRE_PSEUDO/site-touristique-ci.git

# 2. Accéder au répertoire
cd site-touristique-ci

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev
```

Ouvrez ensuite [http://localhost:5173](http://localhost:5173) dans votre navigateur.

---

## 📦 Build de Production

```bash
# Générer le bundle de production optimisé
npm run build
```

Les fichiers statiques seront générés dans le dossier `/dist`, prêts pour Vercel, Netlify ou n'importe quel hébergeur web.

---

## 📝 Licence

Projet développé avec passion pour la promotion du tourisme en Côte d'Ivoire. Tous droits réservés © 2026 Akwaba Tours.
