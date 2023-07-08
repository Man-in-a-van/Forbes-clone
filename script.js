function toggleHidden() { //adds classes to hide certain articles and show which articles are selected
    document.getElementById("pop-articles").classList.toggle("hidden");
    document.getElementById("editors-articles").classList.toggle("hidden");
    document.getElementById("popular").classList.toggle("selected");
    document.getElementById("editor-picks").classList.toggle("selected");
}

document.getElementById("popular").onclick = function () { //when button is clicked
    if (document.getElementById("pop-articles").classList.contains("hidden")) { //checkcs if article list is already selected
        toggleHidden(); //changes article list if not already selected
    }
}

document.getElementById("editor-picks").onclick = function () { //when button is clicked
    if (document.getElementById("editors-articles").classList.contains("hidden")) { //checkcs if article list is already selected
        toggleHidden(); //changes article list if not already selected
    }
}

const animate_hor = document.querySelectorAll('.animate-on-scroll-horizontal'); //creates an arrow with every element that has a class of "animate-on-scroll-horizontal
const animate_vert = document.querySelectorAll('.animate-on-scroll-vertical'); //creates an arrow with every element that has a class of "animate-on-scroll-vertical

const observer = new IntersectionObserver((entries) => { //creates an observer
    entries.forEach((entry) => {
        if (entry.isIntersecting) { //checks if certain elements are visible / has been scrolled down to
            if (entry.target.classList.contains("animate-on-scroll-horizontal")) {
                entry.target.classList.add('animate-horizontal'); //adding the animate class to trigger the animation
            } else {
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

function toggleNavButton() {
    document.getElementById("nav-open").classList.toggle("hidden");
    document.getElementById("nav-close").classList.toggle("hidden");
    document.getElementById("nav-bar").classList.toggle("animate-nav");
}

document.getElementById("nav-open").onclick = toggleNavButton;
document.getElementById("nav-close").onclick = toggleNavButton;



var trans0 = "0%"; // First section of sliders
var trans1 = "-50%"; // Second secion of sliders when page is small
var trans2 = "-40%"; // Second section of sliders when page is small
var trans3 = "-60%"; // Third section of sliders when page is small

//var sliderTranslate = window.getComputedStyle(document.getElementById("sliders"))
//console.log(sliderTranslate);
var media1680 = window.matchMedia("(max-width: 1680px)")
checkMedia1680(media1680) // Call listener function at run time
media1680.addListener(checkMedia1680) // Attach listener function on state changes 

function setTranslate(x) { //Function to set the slider translate a  given string variable
    document.documentElement.style.setProperty("--slider-translate", x);
}

function slideLeft() { //Function to check and set how much the sliders should translate
    if (window.matchMedia("(max-width: 1680px)").matches) {
        if (document.documentElement.style.getPropertyValue("--slider-translate") == trans2) {
            setTranslate(trans0);
        } else if (document.documentElement.style.getPropertyValue("--slider-translate") == trans3) {
            setTranslate(trans2);
        } else {
            setTranslate(trans0);
        }
    } else {
        setTranslate(trans0);

    }
    updateButtons();
}

function slideRight() { //Function to check and set how much the sliders should translate
    if (media1680.matches) {
        if (document.documentElement.style.getPropertyValue("--slider-translate") == trans2) {
            setTranslate(trans3);
        } else {
            setTranslate(trans2);
        }
    } else {
        setTranslate(trans1);
    }
    updateButtons();
}

document.getElementById("slide-right").onclick = slideRight;
document.getElementById("slide-left").onclick = slideLeft;

function updateButtons() {
    switch (document.documentElement.style.getPropertyValue("--slider-translate")) {
        case trans0:
            document.getElementById("slide-left").classList.add("no-opacity");
            document.getElementById("slide-right").classList.remove("no-opacity");
            break;
        case trans1:
            document.getElementById("slide-right").classList.add("no-opacity");
            document.getElementById("slide-left").classList.remove("no-opacity");
            break;
        case trans2:
            document.getElementById("slide-left").classList.remove("no-opacity");
            document.getElementById("slide-right").classList.remove("no-opacity");
            break;
        case trans3:
            document.getElementById("slide-right").classList.add("no-opacity");
            document.getElementById("slide-left").classList.remove("no-opacity");
            break;
    }
}

function checkMedia1680(x) { //function to trigger code depending on screen-size
    if (x.matches) { // If media query matches
        //function for s
        document.documentElement.style.setProperty("--slider-width", "250%");
        slideLeft();

    } else {
        document.documentElement.style.setProperty("--slider-width", "200%");
            if (window.getComputedStyle(document.documentElement).getPropertyValue("--slider-translate") != trans0) {
            setTranslate(trans1);
        }
    }
    updateButtons();
}

function shareQotd(){
    var copyText = "Quote of the day: " + document.getElementById("quote").textContent + " - " + document.getElementById("quote-author").textContent;
    navigator.clipboard.writeText(copyText);
    document.getElementById("share-alert").style.setProperty("display", "block");
    setTimeout(() => {
        document.getElementById("share-alert").style.setProperty("opacity", "0");
        setTimeout(() => {
        document.getElementById("share-alert").style.setProperty("display", "none");
        document.getElementById("share-alert").style.setProperty("opacity", "1");        
    }, 1000);
    }, 2000);
}
document.getElementById("share-box").onclick = shareQotd;