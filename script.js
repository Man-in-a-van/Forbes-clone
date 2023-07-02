function toggleHidden() {
    document.getElementById("pop-articles").classList.toggle("hidden");
    document.getElementById("editors-articles").classList.toggle("hidden");
    document.getElementById("popular").classList.toggle("selected");
    document.getElementById("editor-picks").classList.toggle("selected");
}

document.getElementById("popular").onclick = function() {
    if (document.getElementById("pop-articles").classList.contains("hidden")) {
        toggleHidden();
    }
}

document.getElementById("editor-picks").onclick = function() {
    if (document.getElementById("editors-articles").classList.contains("hidden")) {
        toggleHidden();
    }
}

const animate_hor = document.querySelectorAll('.animate-on-scroll-horizontal');
const animate_vert = document.querySelectorAll('.animate-on-scroll-vertical');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("animate-on-scroll-horizontal")){
                entry.target.classList.add('animate-horizontal');
            } else{
                entry.target.classList.add('animate-vertical');
            }
        }
    })
}, {
    threshold: 1
});

for (let i = 0; i < animate_hor.length; i++) {
    const el = animate_hor[i];
    observer.observe(el);
}
for (let i = 0; i < animate_vert.length; i++) {
    const el = animate_vert[i];
    observer.observe(el);
}