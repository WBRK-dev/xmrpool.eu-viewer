const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('navbar_btn_');

// Function to open the sidebar
function openSidebar() {
  sidebar.classList.remove('sidebar-closed');
  sidebar.classList.add('sidebar-open');
}

// Function to close the sidebar
function closeSidebar() {
  sidebar.classList.remove('sidebar-open');
  sidebar.classList.add('sidebar-closed');
}

// Function to toggle the sidebar on button click
function toggleSidebar() {
  console.log("clicked");
  if (sidebar.classList.contains('sidebar-open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}
// Event listener to toggle the sidebar on button click
toggleBtn.addEventListener('click', toggleSidebar);

// open sidebar when screen is over 1500px
function handleScreenChange(event) {
  if (event.matches) {
      openSidebar();
  }
}
const mediaQuery = window.matchMedia("(min-width: 1500px)");
handleScreenChange(mediaQuery);
mediaQuery.addListener(handleScreenChange);