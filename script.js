console.log("This was build by Baim, with vanila html,css,and javascript only. no frame work or etc")

// ===== Dark Mode Toggle =====
const darkModeToggle = document.getElementById('darkModeToggle');
const iconTheme = document.getElementById('icon-theme');
const mobileThemeBtn = document.getElementById('mobileThemeBtn');
const mobileIconTheme = document.getElementById('mobile-icon-theme');

let isDark = false;

function toggleDarkMode() {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  iconTheme.classList.toggle('fa-moon', !isDark);
  iconTheme.classList.toggle('fa-sun', isDark);
  if (mobileIconTheme) {
    mobileIconTheme.classList.toggle('fa-moon', !isDark);
    mobileIconTheme.classList.toggle('fa-sun', isDark);
  }
}

darkModeToggle.addEventListener('click', toggleDarkMode);
if (mobileThemeBtn) {
  mobileThemeBtn.addEventListener('click', toggleDarkMode);
}


// ===== Page Navigation =====
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page-content').forEach(page => {
    page.classList.remove('active');
  });

  // Deactivate all nav buttons
  document.querySelectorAll('.sidebar-nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show target page
  const targetPage = document.getElementById(`page-${pageName}`);
  if (targetPage) {
    targetPage.classList.add('active');
    // Scroll to top
    targetPage.scrollTop = 0;
  }

  // Activate corresponding nav button
  const targetBtn = document.querySelector(`.sidebar-nav-btn[data-page="${pageName}"]`);
  if (targetBtn) {
    targetBtn.classList.add('active');
  }

  // Toggle mobile back button visibility
  const mobileBackBtn = document.getElementById('mobileBackBtn');
  if (mobileBackBtn) {
    if (pageName === 'home') {
      mobileBackBtn.style.visibility = 'hidden';
    } else {
      mobileBackBtn.style.visibility = 'visible';
    }
  }
}


// ===== Copy Email =====
function copyEmail() {
  navigator.clipboard.writeText('baim@example.com').then(() => {
    showToast('Email copied!');
  }).catch(() => {
    // Fallback
    const textArea = document.createElement('textarea');
    textArea.value = 'baim@example.com';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showToast('Email copied!');
  });
}


// ===== Toast Notification =====
function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: rgba(30, 32, 53, 0.95);
    backdrop-filter: blur(12px);
    color: #fff;
    padding: 10px 24px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 500;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  `;
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  // Remove after delay
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}


// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
  // Number keys for quick navigation
  const pageMap = { '1': 'home', '2': 'about', '3': 'work', '4': 'links', '5': 'contact' };
  if (pageMap[e.key]) {
    showPage(pageMap[e.key]);
  }
});


// ===== Prevent body scroll =====
document.body.addEventListener('wheel', (e) => {
  if (!e.target.closest('.page-content')) {
    e.preventDefault();
  }
}, { passive: false });
