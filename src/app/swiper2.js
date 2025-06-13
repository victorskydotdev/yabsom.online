import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const triggerSwiper2 = () => {
	const swiper = new Swiper('.slider', {
		modules: [Navigation, Pagination, Autoplay],
		loop: true,
		direction: 'horizontal',
		speed: 1000,
		delay: 3000,
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 10,
		mousewheel: true,

		breakpoints: {
			// 640: {
			// 	slidesPerView: 1,
			// },
			// 768: {
			// 	slidesPerView: 2,
			// },
			1024: {
				// slidesPerView: 3,
				spaceBetween: 20,
			},
		},

		virtual: {
			enabled: true,
		},

		// freeMode: true,
		// freeModeMomentum: false,

		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
};
