import './scss/main.scss';

// importing modules
import { loadNavbar } from './app/navbar';
import { loadFooterTemplate } from './app/footer';
import { expandPresAddress } from './app/pres-address-script';
import { fetchFacultyMembers } from './app/load-faculty-members';
import { smoothScrollToPrograms } from './app/script';
import { fetchCourses } from './app/fetch-course';
import { loadCourseData } from './app/load-course';
import { handleFormSubmission } from './app/reg-form';

import { triggerPageTransitions } from './app/page-transition';
import { triggerSwiper } from './app/swiper';

import { renderData } from './app/success-script';

// smoothScrollToPrograms();

loadNavbar();
loadFooterTemplate();
expandPresAddress();
fetchFacultyMembers();
fetchCourses();
loadCourseData();
handleFormSubmission();

window.addEventListener('DOMContentLoaded', () => {
	triggerPageTransitions();

	renderData();
	triggerSwiper();
});
