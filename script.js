function showDetails(sectionId) {
    const modal = document.getElementById('details');
    modal.style.display = 'block';

    const sections = document.querySelectorAll('.detail-section');
    sections.forEach(section => (section.style.display = 'none'));

    document.getElementById(sectionId).style.display = 'block';
}

function hideDetails() {
    const modal = document.getElementById('details');
    modal.style.display = 'none';
}
