document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON data
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load JSON data.");
            }
            return response.json();
        })
        .then(data => {
            renderSummary(data.summary);
            renderEducation(data.education);
            renderSkills(data.skills);
            renderProjects(data.projects);
            renderExperience(data.experience);
        })
        .catch(error => console.error("Error loading resume data:", error));
});

function renderSummary(summaryData) {
    const container = document.getElementById('summary-container');
    container.innerHTML = `
        <h1 class="hero-title">${summaryData.name} <br><span class="accent-text">${summaryData.title}</span></h1>
        <p class="summary-text">${summaryData.description}</p>
    `;
}

function renderEducation(educationData) {
    const container = document.getElementById('education-container');
    let html = '';
    educationData.forEach(edu => {
        html += `
        <div class="education-box">
            <div class="edu-header">
                <span class="edu-title">${edu.institution}</span>
                <span class="edu-date">${edu.years}</span>
            </div>
            <div class="edu-details">
                <p><strong>Degree:</strong> ${edu.degree}</p>
                <p><strong>Location:</strong> ${edu.location} | <strong>GPA:</strong> ${edu.gpa}</p>
                <p><strong>Honors:</strong> ${edu.honors}</p>
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}

function renderSkills(skillsData) {
    const container = document.getElementById('skills-container');
    let html = '';
    skillsData.forEach(skillBlock => {
        const tagsHtml = skillBlock.tags.map(tag => `<span>${tag}</span>`).join('');
        html += `
        <div class="skill-category">
            <h3>${skillBlock.category}</h3>
            <div class="tags">
                ${tagsHtml}
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}

function renderProjects(projectsData) {
    const container = document.getElementById('projects-container');
    let html = '';
    projectsData.forEach(project => {
        const bulletsHtml = project.bullets.map(bullet => `<li>${bullet}</li>`).join('');
        html += `
        <article class="project-item">
            <div class="project-title-bar">
                <h3>${project.title}</h3>
                <span class="project-date">${project.date}</span>
            </div>
            <ul class="bullet-list">
                ${bulletsHtml}
            </ul>
        </article>
        `;
    });
    container.innerHTML = html;
}

function renderExperience(experienceData) {
    const container = document.getElementById('experience-container');
    let html = '';
    experienceData.forEach(exp => {
        const bulletsHtml = exp.bullets.map(bullet => `<li>${bullet}</li>`).join('');
        html += `
        <article class="exp-item">
            <div class="exp-title-bar">
                <div>
                    <h3>${exp.title}</h3>
                    <span class="company">${exp.company}</span>
                </div>
                <span class="exp-date">${exp.date}</span>
            </div>
            <ul class="bullet-list">
                ${bulletsHtml}
            </ul>
        </article>
        `;
    });
    container.innerHTML = html;
}