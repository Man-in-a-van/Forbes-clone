function toggleHidden() { //adds classes to hide certain articles and show which articles are selected
    document.getElementById("pop-articles").classList.toggle("hidden");
    document.getElementById("editors-articles").classList.toggle("hidden");
    document.getElementById("popular").classList.toggle("selected");
    document.getElementById("editor-picks").classList.toggle("selected");
}

document.getElementById("popular").onclick = function() { //when button is clicked
    if (document.getElementById("pop-articles").classList.contains("hidden")) { //checkcs if article list is already selected
        toggleHidden(); //changes article list if not already selected
    }
}

document.getElementById("editor-picks").onclick = function() { //when button is clicked
    if (document.getElementById("editors-articles").classList.contains("hidden")) { //checkcs if article list is already selected
        toggleHidden(); //changes article list if not already selected
    }
}

const animate_hor = document.querySelectorAll('.animate-on-scroll-horizontal'); //creates an arrow with every element that has a class of "animate-on-scroll-horizontal
const animate_vert = document.querySelectorAll('.animate-on-scroll-vertical');//creates an arrow with every element that has a class of "animate-on-scroll-vertical

const observer = new IntersectionObserver((entries) => { //creates an observer
    entries.forEach((entry) => { 
        if (entry.isIntersecting) { //checks if certain elements are visible / has been scrolled down to
            if (entry.target.classList.contains("animate-on-scroll-horizontal")){ 
                entry.target.classList.add('animate-horizontal'); //adding the animate class to trigger the animation
            } else{
                entry.target.classList.add('animate-vertical');
            }
        }
    })
}, {
    threshold: 1 //waits untill the element is 100% in view before animating
});

for (let i = 0; i < animate_hor.length; i++) { //looping through array of elements we want to observe to animate
    const el = animate_hor[i];
    observer.observe(el);
}
for (let i = 0; i < animate_vert.length; i++) {
    const el = animate_vert[i];
    observer.observe(el);
}

function toggleSlide(){
    document.getElementById("sliders").classList.toggle("animate-slide"); //triggers slide animation
    document.getElementById("slide-right").classList.toggle("no-opacity"); //hides/unhides the slide buttons
    document.getElementById("slide-left").classList.toggle("no-opacity");
}

document.getElementById("slide-right").onclick = toggleSlide;
document.getElementById("slide-left").onclick = toggleSlide;

function toggleNavButton(){
    document.getElementById("nav-open").classList.toggle("hidden");
    document.getElementById("nav-close").classList.toggle("hidden");
    document.getElementById("nav-bar").classList.toggle("animate-nav");
}

document.getElementById("nav-open").onclick = toggleNavButton;
document.getElementById("nav-close").onclick = toggleNavButton;

