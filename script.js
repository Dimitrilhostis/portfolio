// Afficher une page de détail
function showDetails(sectionId) {
    const modal = document.getElementById('details');
    modal.classList.add('active');

    const sections = document.querySelectorAll('.detail-section');
    sections.forEach(section => (section.style.display = 'none'));

    document.getElementById(sectionId).style.display = 'block';
}

// Cacher la page de détail
function hideDetails() {
    const modal = document.getElementById('details');
    modal.classList.remove('active');
}


// Afficher le formulaire
function showForm(Id) {
    document.getElementById(Id).style.display = 'flex';
}

// acher le formulaire
function hideForm() {
    document.getElementById("contact-form-container").style.display = 'none';
}


// Fonction pour afficher/masquer les formulaires en fonction de la réponse
function toggleRecurringForm(isRecurring) {
    const recurringForm = document.getElementById('recurring-form');
    const nonRecurringForm = document.getElementById('non-recurring-form');
    
    if (isRecurring) {
        recurringForm.style.display = 'block';
        nonRecurringForm.style.display = 'none';
    } else {
        recurringForm.style.display = 'none';
        nonRecurringForm.style.display = 'block';
    }
}



// Gérer l'envoi du formulaires
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Traitement des données du formulaire principal
    alert("Votre demande a bien été envoyée !");
});
