// Smooth Scroll Animation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form feedback
const form = document.querySelector('#contact-form');
const responseDiv = document.querySelector('#form-response');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const res = await fetch(form.action, { method: 'POST', body: formData });
    const data = await res.json();
    responseDiv.textContent = data.message;
    responseDiv.style.color = data.status === "success" ? "green" : "red";
    if (data.status === "success") form.reset();
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const skillTags = document.querySelectorAll(".skill-tags span");
  const skillName = document.getElementById("skill-name");
  const skillPercent = document.getElementById("skill-percent");
  const progressFill = document.getElementById("progress-fill");

  skillTags.forEach(tag => {
    tag.addEventListener("click", () => {
      // Remove active from others
      skillTags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");

      const name = tag.dataset.skill;
      const level = tag.dataset.level;

      skillName.textContent = name;
      skillPercent.textContent = `${level}%`;
      
      // Animate progress bar
      progressFill.style.width = "0%";
      setTimeout(() => {
        progressFill.style.width = `${level}%`;
      }, 100);
    });
  });
});

