const cosTitleHighlight = document.querySelector('.course-title-highlight');
const regNumElement = document.getElementById('reg-number');
const courseNameWrap = document.getElementById('course');
const userNamewrap = document.getElementById('name');

const data = JSON.parse(sessionStorage.getItem('userData'));

export const renderData = () => {
	if (userNamewrap) {
		console.log('this is the parsed data:', data);

		cosTitleHighlight.innerHTML = data.course;
		courseNameWrap.innerHTML = data.course;
		regNumElement.innerHTML = data.regId;
		userNamewrap.innerHTML = data.name;
	} else return;
};
