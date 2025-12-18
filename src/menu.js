function createMenuItem(name, price, description)
    {
        const wrapper = document.createElement('div');
        
        const menuHeading = document.createElement('h2');
        menuHeading.textContent = name;
       
        const menuPrice = document.createElement('span');
        menuPrice.textContent = price;
       
        const menuDescription = document.createElement('p');
        menuDescription.textContent = description;

        wrapper.classList.add('menu-item');
        wrapper.appendChild(menuHeading);
        wrapper.appendChild(menuPrice);
        wrapper.appendChild(menuDescription);
        
        return wrapper;
    }



export default function loadMenu() {
    const contentDiv = document.getElementById('content');

    // 1. Create the container for the menu
    // TODO: Create an h1 for "Menu"
    const headingElement = document.createElement('h1');
    headingElement.textContent = "MENU";
    headingElement.classList.add('headline');

    // 2. Create menu items
    // Hint: You might want to create a helper function like createMenuItem(name, price, description)
    // so you don't repeat code 5 times!
    
    
    // TODO: Create Divs for specific items (Honey Tea, Toast, etc.)
    const item1 = createMenuItem("Pancakes", "$4", "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.");
    const item2 = createMenuItem("French Toast", "$5", "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.");
    const item3 = createMenuItem("Beary Veggie Sandwich", "$8", "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.");
    const item4 = createMenuItem("Beary Bowl", "$7", "Get a big ole bowl of our berries! Side of honey is $1 extra.");
    // TODO: Add text content to those divs

    // 3. Append everything to contentDiv
    contentDiv.appendChild(headingElement);
    contentDiv.appendChild(item1);
    contentDiv.appendChild(item2);
    contentDiv.appendChild(item3);
    contentDiv.appendChild(item4);
    
    
    console.log("Menu module loaded");
}