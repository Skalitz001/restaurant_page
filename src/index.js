import './style.css'; 
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

console.log("Index.js has loaded!");

function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
}

// Helper function to switch the 'active' class
function setActiveButton(button) {
    const buttons = document.querySelectorAll('.nav-btn');
    
    // 1. Remove 'active' from ALL buttons
    buttons.forEach((btn) => {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });

    // 2. Add 'active' to the clicked button
    button.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    // Safe initial load
    loadHome();
    setActiveButton(homeBtn); // Ensure Home button looks active on start

    homeBtn.addEventListener('click', () => {
        if (homeBtn.classList.contains('active')) return; // Optimization: Don't reload if already active
        clearContent();
        loadHome();
        setActiveButton(homeBtn);
    });

    menuBtn.addEventListener('click', () => {
        if (menuBtn.classList.contains('active')) return;
        clearContent();
        loadMenu();
        setActiveButton(menuBtn);
    });

    contactBtn.addEventListener('click', () => {
        if (contactBtn.classList.contains('active')) return;
        clearContent();
        loadContact();
        setActiveButton(contactBtn);
    });
});