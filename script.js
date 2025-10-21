document.addEventListener("DOMContentLoaded", () => {
  const skillTags = document.querySelectorAll(".skill-tags span");
  const progressFill = document.getElementById("progress-fill");
  const skillName = document.getElementById("skill-name");
  const skillPercent = document.getElementById("skill-percent");

  if (!skillTags.length || !progressFill) return;

  skillTags.forEach(tag => {
    tag.addEventListener("click", () => {
      // Remove highlight from other tags
      skillTags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");

      // Get values properly (avoid undefined)
      const name = tag.getAttribute("data-skill") || "Unknown";
      const percent = tag.getAttribute("data-percent") || "0";

      // Update text
      skillName.textContent = name;
      skillPercent.textContent = percent + "%";

      // Animate progress bar
      progressFill.style.width = "0%";
      setTimeout(() => {
        progressFill.style.width = percent + "%";
      }, 150);
    });
  });

  // Default animation on load (HTML 95%)
  progressFill.style.width = "0%";
  setTimeout(() => {
    progressFill.style.width = "95%";
  }, 200);
});
