<script>
  const skillTags = document.querySelectorAll('.skill-tags span');
  const progressFill = document.getElementById('progress-fill');
  const skillName = document.getElementById('skill-name');
  const skillPercent = document.getElementById('skill-percent');

  skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
      skillTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      const name = tag.dataset.skill;
      const percent = tag.dataset.percent;

      skillName.textContent = name;
      skillPercent.textContent = percent + '%';

      progressFill.style.width = '0%';
      setTimeout(() => {
        progressFill.style.width = percent + '%';
      }, 100);
    });
  });

  // Initial fill animation
  window.addEventListener('load', () => {
    progressFill.style.width = '95%';
  });
</script>

