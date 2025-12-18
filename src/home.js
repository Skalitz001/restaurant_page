import myHomeImage from './home.jpeg';


export default function loadHome() {
    // 1. Select the main content div (id="content")
    const contentDiv = document.getElementById('content');

    // 2. Create the elements for the homepage
    // TODO: Create a standard header (h1) with text "Best Beary Breakfast"
    
    const headingElement = document.createElement('h1');
    headingElement.textContent = "Beary's Breakfast Bar";
    headingElement.classList.add('headline');
    
    // TODO: Create an image element (use a placeholder or import an image)
    const image = document.createElement('img');
    image.src = myHomeImage;
    image.alt = 'Home Tab Image';
    image.classList.add('home-img');

    // TODO: Create a paragraph with a description of the restaurant
    const text = document.createElement('p');
    text.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again. - Goldilocks"

    // 3. Add classes for styling (optional, based on CSS above)
    contentDiv.classList.add('home-tab');

    // 4. Append elements to the content div
    contentDiv.appendChild(headingElement);
    contentDiv.appendChild(image);
    contentDiv.appendChild(text);

    console.log("Home module loaded");
}