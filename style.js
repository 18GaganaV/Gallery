const images = [
    "imagefood.png",
    "burger.jpg",
    "salads.jpg",
    "food3.jpg",
    "food5.jpg",
    "food6.jpg",
    "food7.jpg",
    
];

const curImage = document.getElementById('curImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let curIndex = 0;

function showImage(index) {
    curImage.src = images[index];
}

prevBtn.addEventListener('click', () => {
    curIndex = (curIndex - 1 + images.length) % images.length;
    showImage(curIndex);
});

nextBtn.addEventListener('click', () => {
    curIndex = (curIndex + 1) % images.length;
    showImage(curIndex);
});

showImage(curIndex);
