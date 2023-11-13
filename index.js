// Get the element to animate
var animateElement = document.getElementsByClassName('typing');

// Calculate the position of the element relative to the viewport
var elementTop = animateElement.getBoundingClientReact().top;
var elementBottom = animateElement.getBoundingClientReact().bottom;

// Determine the trigger point
var triggerPoint = window.innerHeight - (elementBottom - elementTop) / 2;

// Define the function to check if the element is in the viewport and trigger the animation
function animateOnScroll() {
    if (window.pageYOffset > triggerPoint) {
        animateElement.classList.add('.demo');
    }
}

// Attach the function to the scroll event
window.addEventListener('scroll', animateOnScroll);
console.log('working');