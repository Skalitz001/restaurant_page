export default function loadContact() {
    const contentDiv = document.getElementById('content');

    // TODO: Create h1 "Contact Us"
    const headingElement = document.createElement('h1');
    headingElement.textContent = "Contact Us";
    headingElement.classList.add('headline');
    // TODO: Create p "Mama Bear"
    const contactLine1 = document.createElement('p');
    contactLine1.textContent = "Mama Bear";
    // TODO: Create p "555-555-5555"
    const contactLine2 = document.createElement('p');
    contactLine2.textContent = "555-555-555";
    // TODO: Create p "honey@bearybreakfast.com"
    const contactLine3 = document.createElement('p');
    contactLine3.textContent = "honey@bearybreakfast.com";



    // Hint: Append them to contentDiv
    contentDiv.appendChild(headingElement);
    contentDiv.appendChild(contactLine1);
    contentDiv.appendChild(contactLine2);
    contentDiv.appendChild(contactLine3);
    
    
    console.log("Contact module loaded");
}