const slides = document.querySelectorAll(".carousel img");
const dotsContainer = document.getElementById("dots");
let currentSlide = 0;

// Create dots dynamically based on the number of images
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
}

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? "block" : "none";
    });

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        dot.classList.remove("active");
        if (idx === index) {
            dot.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Initial display
createDots();
showSlide(currentSlide);
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const query = document.getElementById('searchInput').value.trim().toLowerCase();

    // Redirect to categories based on input
    if (query === 'men') {
        window.location.href = 'index2.html';
    } else if (query === 'women') {
        window.location.href = 'women.html';
    } else if (query === 'electronics') {
        window.location.href = 'electronics.html';
    } else if (query === 'accessories') {
        window.location.href = 'accessories.html';
    } else {
        alert('No results found. Please search for Men, Women, Electronics, or Accessories.');
    }
});

