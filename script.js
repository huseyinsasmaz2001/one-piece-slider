// Définition des données des personnages avec les chemins d'accès des images et des fichiers audio
const characters = [
  {
    "name": "Monkey D. Luffy",
    "description": "Le capitaine de l'équipage du Chapeau de Paille, avec un rêve de devenir le Roi des Pirates.",
    "arc": "Arc East Blue",
    "audio": "audio/luffy.mp3",
    "image": "img/luffy.jpg"
  },
  {
    "name": "Roronoa Zoro",
    "description": "Un puissant bretteur et le premier membre recruté par Luffy.",
    "arc": "Arc East Blue",
    "audio": "audio/zoro.mp3",
    "image": "img/zoro.jpg"
  },
  {
    "name": "Usopp",
    "description": "Un menteur invétéré et un excellent tireur d'élite.",
    "arc": "Arc East Blue",
    "audio": "audio/usopp.mp3",
    "image": "img/usopp.jpg"
  },
  {
    "name": "Nami",
    "description": "Navigatrice du navire et une voleuse talentueuse.",
    "arc": "Arc East Blue",
    "audio": "audio/nami.mp3",
    "image": "img/nami.jpg"
  },
  {
    "name": "Vinsmoke Sanji",
    "description": "Un cuisinier habile et un combattant puissant.",
    "arc": "Arc East Blue",
    "audio": "audio/sanji.mp3",
    "image": "img/sanji.jpg"
  },
  {
    "name": "Tony Tony Chopper",
    "description": "Un renne qui peut prendre différentes formes grâce au Fruit du Démon.",
    "arc": "Arc Drum Island",
    "audio": "audio/chopper.mp3",
    "image": "img/chopper.jpg"
  },
  {
    "name": "Franky",
    "description": "Un cyborg charpentier et le constructeur du Thousand Sunny.",
    "arc": "Arc Water Seven",
    "audio": "audio/franky.mp3",
    "image": "img/franky.jpg"
  },
  {
    "name": "Brook",
    "description": "Un musicien squelette et un ancien membre de l'équipage des Rumbar Pirates.",
    "arc": "Arc Thriller Bark",
    "audio": "audio/brook.mp3",
    "image": "img/brook.jpg"
  },
  {
    "name": "Nico Robin",
    "description": "Une archéologue avec le pouvoir du Fruit du Démon Hana Hana.",
    "arc": "Arc Alabasta",
    "audio": "audio/robin.mp3",
    "image": "img/robin.jpg"
  },
  {
    "name": "Jinbe",
    "description": "Un ancien Capitaine Corsaire et un puissant combattant de poisson homme.",
    "arc": "Arc Impel Down",
    "audio": "audio/jinbe.mp3",
    "image": "img/jinbe.jpg"
  },
  {
    "name": "Portgas D. Ace",
    "description": "Le frère adoptif de Luffy et le commandant de la deuxième flotte de l'équipage de Barbe Blanche.",
    "arc": "Arc Alabasta",
    "audio": "audio/ace.mp3",
    "image": "img/ace.jpg"
  },
  {
    "name": "Sabo",
    "description": "Le frère adoptif de Luffy et le deuxième commandant de l'Armée Révolutionnaire.",
    "arc": "Arc Dressrosa",
    "audio": "audio/sabo.mp3",
    "image": "img/sabo.jpg"
  },
  {
    "name": "Red-Haired Shanks",
    "description": "Un des Quatre Empereurs et un ancien membre de l'équipage de Gol D. Roger.",
    "arc": "Arc Romance Dawn",
    "audio": "audio/shanks.mp3",
    "image": "img/shanks.jpg"
  },
  {
    "name": "Blackbeard",
    "description": "Un des Quatre Empereurs et le Capitaine de l'équipage du Barbe Noire.",
    "arc": "Arc Drum Island",
    "audio": "audio/blackbeard.mp3",
    "image": "img/blackbeard.jpg"
  },
  {
    "name": "Donquixote Doflamingo",
    "description": "Ancien Capitaine Corsaire, surnommé le Joker, et l'ancien roi de Dressrosa.",
    "arc": "Arc Dressrosa",
    "audio": "audio/doflamingo.mp3",
    "image": "img/doflamingo.jpg"
  }
];

// Déclaration des variables globales
let slideIndex = 0;
const imageContainer = document.querySelector('.image-container');
const characterInfo = document.querySelector('.character-info');
let audioPlayer = null; // Variable pour stocker l'objet Audio

// Fonction pour mettre à jour le slider et afficher les données du personnage correspondant
function updateSlider() {
  const character = characters[slideIndex];

  // Mettre à jour l'image
  const imageContainer = document.querySelector('.image-container');
  const characterInfo = document.querySelector('.character-info');
  imageContainer.innerHTML = `<img class="img" src="${character.image}" alt="${character.name}">`;

  // Supprimer la classe 'show' pour cacher la bulle de discussion
  characterInfo.classList.remove('show');

  // Arrêter la musique actuelle s'il y en a une
  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

  // Lecture du fichier audio correspondant lorsque l'utilisateur clique sur l'image
  const image = document.querySelector('.img');
  image.addEventListener('click', function playAudioAndDisplayDescription() {
    audioPlayer = new Audio(character.audio);
    audioPlayer.play();

    // Mettre à jour la description du personnage
    characterInfo.innerHTML = `
      <h2>${character.name}</h2>
      <p>Description: ${character.description}</p>
      <p>Arc: ${character.arc}</p>
    `;

    // Ajouter la classe 'show' pour afficher la bulle de discussion
    characterInfo.classList.add('show');

    // Suppression de l'écouteur d'événement pour éviter de déclencher à nouveau l'audio
    image.removeEventListener('click', playAudioAndDisplayDescription);
  });
}
// Fonction pour le bouton précédent
function previousSlide() {
  slideIndex = (slideIndex - 1 + characters.length) % characters.length;
  updateSlider();
}

// Fonction pour le bouton suivant
function nextSlide() {
  slideIndex = (slideIndex + 1) % characters.length;
  updateSlider();
}

// Appel initial pour afficher la première carte
updateSlider();
