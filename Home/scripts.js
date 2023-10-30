// /* ------------------ Home Slider ------------------- */
const imgBox = document.querySelector(".slider-container");
const slidesBanner = document.getElementsByClassName('slideBox');

var i = 0;
function nextSlide() {
  slidesBanner[i].classList.remove('active');
  i = (i + 1) % slidesBanner.length;
  slidesBanner[i].classList.add('active');
}

function prevSlide() {
  slidesBanner[i].classList.remove('active');
  i = (i - 1 + slidesBanner.length) % slidesBanner.length;
  slidesBanner[i].classList.add('active');
}

const itemsDisplay = 4;
const bestSell = document.querySelector('.bestSell ul');
const itemsBestSellLength = bestSell.querySelectorAll('li').length;
const itemsBestSellHidden = itemsBestSellLength - itemsDisplay;
const itemWidth = 100 / itemsDisplay;
let currentBestSellItem = 0;

function prevBestSellItem() {
  if (currentBestSellItem > 0) {
    currentBestSellItem--;
    updateTransformBestSell();
  }
}

function nextBestSellItem() {
  if (currentBestSellItem < itemsBestSellHidden) {
    currentBestSellItem++;
    if (currentBestSellItem === itemsBestSellHidden) {
      document.querySelector('.next').disabled = true;
    }
    updateTransformBestSell();
  }
}

function updateTransformBestSell() {
  const transformValue = `translateX(-${currentBestSellItem * itemWidth}%)`;
  bestSell.style.transform = transformValue;
  bestSell.style.transition = `300ms`;
}

const news = document.querySelector('.new ul');
const itemsNewLength = news.querySelectorAll('li').length;
const itemsNewHidden = itemsNewLength - itemsDisplay;
var currentNewItem = 0;
function prevNewItem() {
  if (currentNewItem > 0) {
    currentNewItem--;
    updateTransformNew();
  }
}

function nextNewItem() {
  if (currentNewItem < itemsNewHidden) {
    currentNewItem++;
    if (currentNewItem === itemsNewHidden) {
      document.querySelector('.next').disabled = true;
    }
    updateTransformNew();
  }
}

function updateTransformNew() {
  const transformValue = `translateX(-${currentNewItem * itemWidth}%)`;
  news.style.transform = transformValue;
  news.style.transition = `300ms`;
}
