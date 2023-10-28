const elements = document.querySelectorAll(".sub-title");
const initialDuration = 5000; // Durée initiale de l'animation
const durationIncrement = 5000; // Incrémentation de la durée
let delay = 0; // Délai initial

elements.forEach((element, index) => {
  const duration = initialDuration + index * durationIncrement;
  element.setAttribute("data-aos-duration", duration.toString());
  element.classList.add("aos-animate");

  // Ajoutez les classes CSS pour les animations
  element.classList.add("sub-title-animation");

  // Ajoutez le délai d'animation
  element.style.animationDelay = `${delay}ms`;
  delay += 500; // Augmentez le délai pour chaque élément
});
document.addEventListener('mousemove', parallax);
function parallax(e){
    const elements = document.querySelectorAll(".parallax");
    
    elements.forEach(function(element){
        const speed = element.getAttribute('data-speed');
        
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}






