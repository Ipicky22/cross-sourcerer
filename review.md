# _______ Cross-Sourcerer - Correction _______

---
`Adrien Masson` <-- `Benjamin Lecuona`

---

# Architecture du projet

✔️ Les composants sont bien individualisés, ça facilite la lecture du code.

⛔️ Les méthodes pourraient davantage être externalisées :
* la configuration du client Apollo pourrait être une fonction à part, réutilisable dans les différents projets
* un fichier contenant toutes les requêtes Apollo serait mieux (à mon sens) pour réutilisabilité + isolation dans une couche d'accès aux données (// repository)

# Résolution des requêtes GraphQL

✔️ Toutes les requêtes demandées sont présentes

⛔️ Pagination pas utilisée (mais comme tout le monde)

# Utilisation d'Apollo

✔️ UseQuery bien utilisé.

⛔️ Mais son refetch aurait pu être utilisé.


# UI/X de l'application 

✔️ Bonne utilistation du css et des composants material UI

⛔️ Renseigner le login gitHub depuis un écran dédié plutôt que par le .env serait mieux.

⛔️ Responsive imparfait

# Portabilité (Electron, Mobile, PWA)

✔️ Rien à redire


# Qualité du code 

✔️ Rien à redire, à part :
* le parsing des data graphQL aurait pu se faire via `array.reduce()` plutôt que `array.forEach()` (gain en lignes de code)
* Javascript plutôt que Typescript = petit joueur 😉
* Il me semble qu'il manque des gestions d'erreur sur le parsing des data récupérées (voir PR).

## Configuration ✔️

* **Installation :** un fichier pour vérifier la présence / contenu du .env serait un plus
* **Eslint :** attention, le script ne fonctionne pas sur windows (voir fix dans la PR)

# Bonus

* La configuration d'eslint reprend celle de prettier


# Notation
- [ 2.5 / 3 ] **Architecture du projet** 
- [ 2.5 / 3 ]  **Résolution des requêtes GraphQL**
- [ 1.5 / 2 ]  **Utilisation d'Apollo**
- [ 1.5 / 3 ] **UI/X de l'application**
- [ 2 / 3 ]  **Portabilité (Electron, Mobile, PWA)**
- [ 3 / 4 ]  **Qualité du code**
- [ 1 / 2 ]  **Bonus**

# 14/20
