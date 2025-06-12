import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const triggerSwiper = () => {
	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination, Autoplay],
		loop: true,
		// centeredSlides: true,

		direction: 'horizontal',
		speed: 500,

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
