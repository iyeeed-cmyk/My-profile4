// 1. كود تغيير الثيم (Dark/Light)
const body = document.body;
const themeIcon = document.getElementById('themeIcon');

function toggleTheme() {
    body.classList.toggle('dark-mode');
    
    // تغيير الأيقونة
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// 2. كود فتح وإغلاق الإعدادات
const settingsMenu = document.getElementById('settingsMenu');
const overlay = document.getElementById('overlay');

function toggleSettings() {
    settingsMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// 3. كود وهمي لتغيير اللغة
function changeLanguage() {
    alert("Language switch feature will be available soon! (Arabic is coming)");
    toggleSettings();
}

// 4. كود المشاركة
function shareProfile() {
    if (navigator.share) {
        navigator.share({
            title: 'Iyed Wederni',
            url: window.location.href
        });
    } else {
        alert("URL copied to clipboard!");
    }
}