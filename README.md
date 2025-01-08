Scrolling Animation in JavaScript
Overview
This project demonstrates how to create scrolling animations using pure JavaScript. The animations are triggered based on the user's scroll position, allowing elements to animate when they come into view. This project is designed to show how JavaScript can be used to detect scrolling and trigger animations without the need for external libraries or CSS-based animations.

Features
JavaScript-Driven Animations: The animations are controlled entirely by JavaScript.
Viewport Detection: Animations are triggered when elements enter or exit the viewport during scrolling.
No Dependencies: The project does not rely on any external libraries like jQuery or third-party CSS frameworks.
Interactive Scroll Effects: Different types of animations are triggered based on scroll position and element visibility.
Demo
You can view a live demo of the project here: https://scrolljsanimation.vercel.app (Add the link to your demo if hosted online).

Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/DSnake0/Scrolling-Animation-JS.git
Navigate to the project folder:

bash
Copy code
cd Scrolling-Animation-JS
Open index.html in your browser to see the scroll-based animations in action.

Usage
This project uses JavaScript to detect when elements come into view while scrolling and then triggers specific animations on them. To use or extend the animations:

Add new elements: If you want to add more elements to animate, simply add them to your HTML file and use the JavaScript to check for their visibility.
Adjust scroll behavior: You can modify the scroll detection thresholds and animation styles within the JavaScript code to suit your needs.
Example JavaScript Code:
Here is an example of how the scrolling animations are set up:

js
Copy code
// Get all elements with the class 'animate-on-scroll'
const elements = document.querySelectorAll('.animate-on-scroll');

// Function to check if an element is in the viewport
function checkScroll() {
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    
    // If the element is within the viewport, add the 'visible' class to trigger animation
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible'); // Trigger animation when element is in view
    }
  });
}

// Listen for scroll events and call checkScroll
window.addEventListener('scroll', checkScroll);

// Initial check in case some elements are already in the viewport
checkScroll();
In this example, the .animate-on-scroll class is used to mark the elements that should be animated. When they enter the viewport, the visible class is added to trigger the animation logic.

Technologies Used
HTML5
JavaScript (Vanilla)
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contribution
Feel free to contribute by opening issues or submitting pull requests. Suggestions for new animations or optimizations are always welcome!
