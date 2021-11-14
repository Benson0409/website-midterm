// 設定一個引數記錄當前是第幾張圖片
var slideIndex = 1;
showSlides(slideIndex);


// 設定按鈕的點擊事件
function plusSlides(n) {
    showSlides(slideIndex += n);
}


// 設定最下邊小原點的點擊事件
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// 設定當前在第幾張的計算方式
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // 一旦設定這個屬性，所在的圖片就會顯示
    slides[slideIndex - 1].style.display = "block";
    // 一旦設定這個屬性，所在的小圓點就會變化
    dots[slideIndex - 1].className += " active";
}