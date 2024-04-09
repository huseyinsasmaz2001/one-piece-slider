let slideIndex = 0;
const slides = document.querySelectorAll('.slider .card');
const totalSlides = slides.length;
const jsonFile = 'onepiece.json'; // Chemin vers le fichier JSON

// Fonction pour charger les données du fichier JSON
async function loadJSON() {
  try {
    const response = await fetch(jsonFile);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}

// Fonction pour afficher les données du personnage
async function displayCharacterData(index) {
    const data = await loadJSON();
    const character = data[index];
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

// Fonction pour effacer les données du personnage
function clearCharacterData() {
  const characterInfo = document.querySelector('.character-info');
  characterInfo.innerHTML = ''; // Efface le contenu précédent
}

// Fonction pour déplacer le slider vers l'index spécifié
function moveSlide(n) {
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  clearCharacterData(); // Efface les données du personnage lorsque vous utilisez les boutons "Next" ou "Previous"
  updateSlider();
}

// Fonction pour mettre à jour le slider et afficher les données du personnage correspondant
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block'; // Affiche la carte à l'index courant
      slide.onclick = () => displayCharacterData(index); // Ajoute un gestionnaire d'événement pour afficher les données au clic sur l'image
    } else {
      slide.style.display = 'none'; // Cache les autres cartes
    }
  });
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

// Appel initial pour afficher la première carte
updateSlider();
