const courseWrap = document.querySelector('.course-hero-section');

export const loadCourseData = () => {
	if (!courseWrap) {
		return;
	} else {
		const courseData = sessionStorage.getItem('courseData');
		const data = JSON.parse(courseData);

		courseWrap.innerHTML = layoutTemplate(data);

		// console.log(data);

		const programHighlight = document.querySelector('.program-highlight');

		const durationHighlight = document.querySelector('.duration-highlight');

		if (!data && programHighlight) {
			alert('Go back to programs');
		} else {
			const courseTitle = data.courseTitle;

			const course1 =
				'Certified African Manufacturing Entrepreneur (CAME) Program';
			const course2 = 'Certificate in Lean Manufacturing';
			const course3 = 'Advanced Manufacturing Leadership Program';
			const course4 = 'Entrepreneurship in Manufacturing';

			if (courseTitle === course1) {
				programHighlight.innerHTML =
					'Become a Certified African Manufacturing Entreprenuer in just 3 months';
			} else if (courseTitle === course2) {
				programHighlight.innerHTML =
					'Earn a Certificate in Manufacturing in 4 weeks';
			} else if (courseTitle === course3) {
				programHighlight.innerHTML =
					'Earn the Advanced Manufacturing Leadership Certificate in 6 weeks';
			} else {
				programHighlight.innerHTML =
					'Get Certified with Entrepreneurship in Manufacturing Certificate';
			}
		}
	}
};

// helper function 1
const checkForEmptyVals = (val) => val ?? '';
// end of helper function 1

const layoutTemplate = (callback) => {
	// console.log('callback.courseModules', callback.courseModules);
	return `
    <div class="container">
				

				<div class="course-heading-wrap">
					<h3 class="course-title">${checkForEmptyVals(callback.courseTitle)}</h3>

					<h5 class="sub-title">${checkForEmptyVals(callback.subTitle)}</h5>
				</div>

				<div class="course-art">
					<img src="${checkForEmptyVals(callback.image)}" alt="">
				</div>

				<div class="course-content">
					<div class="content-wrap">
						<h4 class="heading">Program Overview</h4>

						<div class="wrap">
							<p class="text"><i class="fa-solid fa-clock"></i> <span class="highlight">Duration</span>: ${checkForEmptyVals(
								callback.programOverview.duration
							)}</p>
							<p class="text"><i class="fa-solid fa-globe"></i> <span class="highlight">Learning Mode</span>: ${checkForEmptyVals(
								callback.programOverview.format
							)}</p>
							<p class="text"><i class="fa-solid fa-graduation-cap"></i><span class="highlight">Certification</span>: ${checkForEmptyVals(
								callback.programOverview.certification
							)}</p>
							<p class="text"><i class="fa-solid fa-compass"></i> <span class="highlight">Structure</span>: ${checkForEmptyVals(
								callback.programOverview.structure
							)}</p>
						</div>
					</div>

					<div class="content-wrap">
						<h4 class="heading">Program Structure</h4>

						<p class="text">${checkForEmptyVals(callback.programStructure)}</p>
					</div>
				</div>

				<div class="course-modules">
					<!-- module 1 -->
					<div class="module-wrap">
						<h4 class="heading">Module 1: ${checkForEmptyVals(
							callback.courseModules.module1.title
						)}</h4>

						<p class="text">Module duration: ${checkForEmptyVals(
							callback.courseModules.module1.moduleDuration
						)}</p>

						<ul class="module-list">
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module1.moduleList.list1
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module1.moduleList.list2
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module1.moduleList.list3
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module1.moduleList.list4
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module1.moduleList.list5
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module1.moduleList.list6
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module1.moduleList.list7
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module1.moduleList.list8
							)}</li>
						</ul>
					</div>

					<!-- module 2 -->
					<div class="module-wrap">
						<h4 class="heading">Module 2: ${checkForEmptyVals(
							callback.courseModules.module2.title
						)}</h4>

						<p class="text">Module duration: ${checkForEmptyVals(
							callback.courseModules.module2.moduleDuration
						)}</p>

						<ul class="module-list">
							<li class="list">
								<span class="icon"></span>
								<span>${checkForEmptyVals(
									callback.courseModules.module2.moduleList.list1
								)}</span>
							</li>

							<li class="list">
								<span class="icon"></span>
								<span class="">
									${checkForEmptyVals(callback.courseModules.module2.moduleList.list2)}
								</span>
							</li>

							<li class="list">${checkForEmptyVals(
								callback.courseModules.module2.moduleList.list3
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module2.moduleList.list4
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module2.moduleList.list5
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module2.moduleList.list6
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module2.moduleList.list7
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module2.moduleList.list8
							)}</li>
						</ul>
					</div>

					<!-- module 3 -->
					<div class="module-wrap">
						<h4 class="heading">Module 3: ${checkForEmptyVals(
							callback.courseModules.module3.title
						)}</h4>

						<p class="text">Module duration: ${checkForEmptyVals(
							callback.courseModules.module3.moduleDuration
						)}</p>

						<ul class="module-list">
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module3.moduleList.list1
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module3.moduleList.list2
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module3.moduleList.list3
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module3.moduleList.list4
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module3.moduleList.list5
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module3.moduleList.list6
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module3.moduleList.list7
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module3.moduleList.list8
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module3.moduleList.list9
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module3.moduleList.list10
							)}</li>
						</ul>
					</div>

					<!-- module 4 -->
					<div class="module-wrap">
						<h4 class="heading">Module 4: ${checkForEmptyVals(
							callback.courseModules.module4.title
						)}</h4>

						<p class="text">Module duration: ${checkForEmptyVals(
							callback.courseModules.module4.moduleDuration
						)}</p>

						<ul class="module-list">
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module4.moduleList.list1
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module4.moduleList.list2
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module4.moduleList.list3
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module4.moduleList.list4
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module4.moduleList.list5
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module4.moduleList.list6
							)}</li>
							<li class="list">${checkForEmptyVals(
								callback.courseModules.module4.moduleList.list7
							)}</li>
						</ul>
					</div>
				</div>
			</div>
  `;
};

// Certified African Manufacturing Entrepreneur
// Certificate in Lean Manufacturing
// Advanced Manufacturing Leadership Program
// Entrepreneurship in Manufacturing
