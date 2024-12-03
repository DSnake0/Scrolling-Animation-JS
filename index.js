const canvas = document.querySelector("#frame");
const context = canvas.getContext("2d");

const totalFrames = 382;
const images = [];
let loadedImages = 0;

const frames = { current: 0 };

function preloadImages() {
    for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `./frames/frame_${i.toString().padStart(4, "0")}.jpg`;

        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalFrames) {
                console.log("All images loaded");
                initializeCanvas();
                initializeScrollAnimation();
            }
        };

        img.onerror = () => {
            console.error(`Failed to load image: frame_${i.toString().padStart(4, "0")}.jpg`);
        };

        images.push(img);
    }
}

function renderFrame(index) {
    const img = images[index];
    if (img && img.complete) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const xOffset = (canvas.width - img.width * scale) / 2;
        const yOffset = (canvas.height - img.height * scale) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, xOffset, yOffset, img.width * scale, img.height * scale);
    }
}

function initializeCanvas() {
    renderFrame(0);
}

function initializeScrollAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(frames, {
        current: totalFrames - 1,
        scrollTrigger: {
            trigger: ".parent",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        },
        onUpdate: () => {
            const frameIndex = Math.round(frames.current);
            renderFrame(frameIndex);
        },
    });
}

preloadImages();
