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
          <a href="" class="nav-link program-link">Programs</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Resources</a>
        </li>
        <li class="nav-item">
          <a href="/admission.html" class="nav-link">Admissions</a>
        </li>
        <li class="nav-item">
          <a href="/about.html" class="nav-link">About us</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Events & News</a>
        </li>
      </ul>

      <div class="nav-btn">
        <a href="#" class="btn btn-primary">Register</a>
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
