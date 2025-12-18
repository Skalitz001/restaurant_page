import './style.css'; // Assuming you have css-loader set up in Webpack
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// 1. Initial Load
// TODO: Call loadHome() here so the page isn't empty on first visit.


// 2. Tab Switching Logic
function clearContent() {
    const contentDiv = document.getElementById('content');
    // TODO: Set contentDiv.innerHTML to an empty string to wipe current tab
}

// 3. Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    homeBtn.addEventListener('click', () => {
        clearContent();
        loadHome();
        // Optional: Toggle the 'active' class on buttons for styling
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        loadMenu();
        // Optional: Toggle the 'active' class on buttons
    });

    contactBtn.addEventListener('click', () => {
        // TODO: Call clearContent
        // TODO: Call loadContact
    });
});