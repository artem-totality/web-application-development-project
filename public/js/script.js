console.log('Go');

const myCarouselElement = document.querySelector('#carouselSlides');

const carousel = new bootstrap.Carousel(myCarouselElement, {
	interval: 3000,
	touch: true,
});
