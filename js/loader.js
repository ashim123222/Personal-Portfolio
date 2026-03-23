// Content Loader Script

document.addEventListener("DOMContentLoaded", function () {
  const loaderContainer = document.querySelector(".loader-container");
  const progressBar = document.querySelector(".progress-bar");
  const progressText = document.querySelector(".progress-text");

  if (!loaderContainer || !progressBar || !progressText) {
    console.warn("Loader elements not found");
    return;
  }

  // Initialize
  document.body.classList.add("loading");
  let currentProgress = 0;

  // Start the progress bar animation
  progressBar.classList.add("animating");

  // Simulate progress updates
  const updateInterval = setInterval(() => {
    currentProgress += Math.random() * 20;
    if (currentProgress > 85) {
      currentProgress = 85;
    }
    updateProgressText(currentProgress);
  }, 200);

  // Complete the loader after a certain time
  setTimeout(() => {
    clearInterval(updateInterval);
    currentProgress = 100;
    updateProgressText(currentProgress);

    // Hide loader
    setTimeout(() => {
      loaderContainer.classList.add("hidden");
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");

      // Remove loader from DOM after animation completes
      setTimeout(() => {
        loaderContainer.style.display = "none";
      }, 500);
    }, 300);
  }, 2300);

  function updateProgressText(progress) {
    progressText.textContent = Math.floor(progress) + "%";
  }
});

// Handle page transitions (for future use)
window.addEventListener("beforeunload", function () {
  const loaderContainer = document.querySelector(".loader-container");
  if (loaderContainer) {
    loaderContainer.classList.remove("hidden");
    loaderContainer.style.display = "flex";
    document.body.classList.remove("loaded");
    document.body.classList.add("loading");
  }
});
