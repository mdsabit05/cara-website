  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  function toggleSidebar() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  // Close sidebar if clicked outside
  document.addEventListener("click", function(event) {
    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(event.target) &&
      !event.target.classList.contains("toggle-btn")
    ) {
      toggleSidebar();
    }
  });