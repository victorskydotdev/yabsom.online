import { coursesObject } from './courses-object';
const courseBtns = document.querySelectorAll('.prog-btn');
const loadspinModal = document.querySelector('.loadspin-modal');

export const fetchCourses = () => {
	if (!courseBtns) {
		return;
	} else {
		courseBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				if (loadspinModal) {
					loadspinModal.classList.add('show-loading');
				}

				setTimeout(() => {
					const btnId = btn.getAttribute('btn-id');

					const course = coursesObject.find(
						(matchingCourseId) => matchingCourseId.id === Number(btnId)
					);

					// console.log(course);

					sessionStorage.setItem('courseData', JSON.stringify(course));

					window.location.href = '/course.html';
				}, 3500);
			});
		});
	}
};
