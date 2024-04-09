// Déclaration des variables globales
let slideIndex = 0;
const slides = document.querySelectorAll('.slider .card');
const totalSlides = slides.length;

// Définition des données des personnages
const characters = [
      {
    "name": "Monkey D. Luffy",
    "description": "Le capitaine de l'équipage du Chapeau de Paille, avec un rêve de devenir le Roi des Pirates.",
    "arc": "Arc East Blue",
    "audio": "audio/luffy.mp3"
  },
  {
    "name": "Roronoa Zoro",
    "description": "Un puissant bretteur et le premier membre recruté par Luffy.",
    "arc": "Arc East Blue",
    "audio": "audio/zoro.mp3"
  },
  {
    "name": "Usopp",
    "description": "Un menteur invétéré et un excellent tireur d'élite.",
    "arc": "Arc East Blue",
    "audio": "audio/usopp.mp3"
  },
  {
    "name": "Nami",
    "description": "Navigatrice du navire et une voleuse talentueuse.",
    "arc": "Arc East Blue",
    "audio": "audio/nami.mp3"
  },
  {
    "name": "Vinsmoke Sanji",
    "description": "Un cuisinier habile et un combattant puissant.",
    "arc": "Arc East Blue",
    "audio": "audio/sanji.mp3"
  },
  {
    "name": "Tony Tony Chopper",
    "description": "Un renne qui peut prendre différentes formes grâce au Fruit du Démon.",
    "arc": "Arc Drum Island",
    "audio": "audio/chopper.mp3"
  },
  {
    "name": "Franky",
    "description": "Un cyborg charpentier et le constructeur du Thousand Sunny.",
    "arc": "Arc Water Seven",
    "audio": "audio/franky.mp3"
  },
  {
    "name": "Brook",
    "description": "Un musicien squelette et un ancien membre de l'équipage des Rumbar Pirates.",
    "arc": "Arc Thriller Bark",
    "audio": "audio/brook.mp3"
  },
  {
    "name": "Nico Robin",
    "description": "Une archéologue avec le pouvoir du Fruit du Démon Hana Hana.",
    "arc": "Arc Alabasta",
    "audio": "audio/robin.mp3"
  },
  {
    "name": "Jinbe",
    "description": "Un ancien Capitaine Corsaire et un puissant combattant de poisson homme.",
    "arc": "Arc Impel Down",
    "audio": "audio/jinbe.mp3"
  },
  {
    "name": "Portgas D. Ace",
    "description": "Le frère adoptif de Luffy et le commandant de la deuxième flotte de l'équipage de Barbe Blanche.",
    "arc": "Arc Alabasta",
    "audio": "audio/ace.mp3"
  },
  {
    "name": "Sabo",
    "description": "Le frère adoptif de Luffy et le deuxième commandant de l'Armée Révolutionnaire.",
    "arc": "Arc Dressrosa",
    "audio": "audio/sabo.mp3"
  },
  {
    "name": "Red-Haired Shanks",
    "description": "Un des Quatre Empereurs et un ancien membre de l'équipage de Gol D. Roger.",
    "arc": "Arc Romance Dawn",
    "audio": "audio/shanks.mp3"
  },
  {
    "name": "Blackbeard",
    "description": "Un des Quatre Empereurs et le Capitaine de l'équipage du Barbe Noire.",
    "arc": "Arc Drum Island",
    "audio": "audio/blackbeard.mp3"
  },
  {
    "name": "Donquixote Doflamingo",
    "description": "Ancien Capitaine Corsaire, surnommé le Joker, et l'ancien roi de Dressrosa.",
    "arc": "Arc Dressrosa",
    "audio": "audio/doflamingo.mp3"
  }
];

// Fonction pour mettre à jour le slider et afficher les données du personnage correspondant
function updateSlider() {
    slides.forEach((slide, index) => {
        const character = characters[index];
        const name = character.name;
        const description = character.description;
        const arc = character.arc;

        if (index === slideIndex) {
            slide.style.display = 'block'; // Affiche la carte à l'index courant
        } else {
            slide.style.display = 'none'; // Cache les autres cartes
        }

        // Ajouter un gestionnaire d'événement clic individuel pour chaque diapositive
        slide.addEventListener('click', () => displayCharacterData(character));
    });
}

// Fonction pour afficher les données du personnage
function displayCharacterData(character) {
    const name = character.name;
    const description = character.description;
    const arc = character.arc;

    // Créer une nouvelle div pour afficher les données du personnage
    const characterInfo = document.querySelector('.character-info');
    characterInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Description: ${description}</p>
        <p>Arc: ${arc}</p>
    `;
    characterInfo.style.display = 'block';
}

// Fonction pour le bouton précédent
function previousSlide() {
    moveSlide(-1);
    hideCharacterInfo(); // Masquer la boîte de description
}

// Fonction pour le bouton suivant
function nextSlide() {
    moveSlide(1);
    hideCharacterInfo(); // Masquer la boîte de description
}

// Fonction pour masquer la boîte de description
function hideCharacterInfo() {
    const characterInfo = document.querySelector('.character-info');
    characterInfo.style.display = 'none';
}

// Fonction pour déplacer le slider vers l'index spécifié
function moveSlide(n) {
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    clearCharacterData(); // Efface les données du personnage lorsque vous utilisez les boutons "Next" ou "Previous"
    updateSlider();
}

// Fonction pour effacer les données du personnage
function clearCharacterData() {
    const characterInfo = document.querySelector('.character-info');
    characterInfo.innerHTML = ''; // Efface le contenu précédent
}

// Appel initial pour afficher la première carte
updateSlider();
