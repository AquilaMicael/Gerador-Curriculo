const addExperience = document.getElementById('add-experience');
const experienceFields = document.getElementById('experience-fields');

let experienceCount = 0;

addExperience.addEventListener('click', () => {
    experienceCount++;

    const experienceField = document.createElement('div');
    experienceField.classList.
