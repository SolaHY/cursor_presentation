let currentSlideIndex = 1;
const totalSlides = 13;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');
    
    if (n > totalSlides) currentSlideIndex = 1;
    if (n < 1) currentSlideIndex = totalSlides;
    
    // スライドIDの取得
    let slideId;
    if (currentSlideIndex === 3) {
        slideId = 'slide3';
    } else if (currentSlideIndex === 4) {
        slideId = 'slide3-1';
    } else if (currentSlideIndex === 5) {
        slideId = 'slide3-2';
    } else if (currentSlideIndex === 6) {
        slideId = 'slide3-3';
    } else if (currentSlideIndex === 7) {
        slideId = 'slide3-4';
    } else if (currentSlideIndex === 8) {
        slideId = 'slide3-5';
    } else if (currentSlideIndex === 9) {
        slideId = 'slide3-6';
    } else if (currentSlideIndex === 10) {
        slideId = 'slide4';
    } else if (currentSlideIndex === 11) {
        slideId = 'slide5';
    } else if (currentSlideIndex === 12) {
        slideId = 'slide6';
    } else if (currentSlideIndex === 13) {
        slideId = 'slide7';
    } else {
        slideId = `slide${currentSlideIndex}`;
    }
    
    document.getElementById(slideId).style.display = 'flex';
    document.getElementById('currentSlide').textContent = currentSlideIndex;
}

function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function previousSlide() {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
}

// キーボードナビゲーション
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        previousSlide();
    }
});

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    showSlide(1);
}); 