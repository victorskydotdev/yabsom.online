import { headerNavWrap } from './variables';
import { brandLogo } from './variables';

const navbarTemplate = () => {
	return `
    <nav class="nav">
      <div class="brand-wrap">
        <a href="/" class="nav-logo">
          <img src="${brandLogo}" alt="" />
        </a>
      </div>

      <ul class="nav-list">
        <li class="nav-item">
          <a href="/#programs" class="nav-link">Programs</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Resources</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Admissions</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Industry Engagements</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Events & News</a>
        </li>
      </ul>

      <div class="nav-btn">
        <a href="#" class="btn btn-primary">Enrol Now</a>
      </div>

      <!-- hamburger -->
      <div class="hamburger">
        <i class="fi fi-rr-bars-staggered"></i>
      </div> 
    </nav>
  `;
};

export const loadNavbar = () => {
	if (headerNavWrap) {
		headerNavWrap.innerHTML = navbarTemplate();

		const modifyNavBg = () => {
			window.addEventListener('scroll', () => {
				if (window.scrollY >= 200) {
					headerNavWrap.classList.add('add-nav-bg');
				} else headerNavWrap.classList.remove('add-nav-bg');
			});
		};

		modifyNavBg();
	}
};
