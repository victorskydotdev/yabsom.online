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
        <div class="nav-wrap">
          <li class="nav-item">
            <a href="/" class="nav-link program-link">Home</a>
          </li>

          <li class="nav-item">
            <a href="/#programs" class="nav-link program-link">Programs</a>
          </li>

          <!-- <li class="nav-item">
            <a href="#" class="nav-link">Resources</a>
          </li> -->

          <li class="nav-item">
            <a href="/admission.html" class="nav-link">Admissions</a>
          </li>

          <li class="nav-item">
            <a href="/about.html" class="nav-link">About us</a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">Events & News</a>
          </li>

          <span class="close-mobile-nav">
            <i class="fi fi-ss-angle-right"></i>
          </span>
        </div>
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

		const navBtn = document.querySelector('.btn-primary');
		const burgerBtn = document.querySelector('.hamburger');
		const closeNavBtn = document.querySelector('.close-mobile-nav');
		const mobileNav = document.querySelector('.nav-list');

		const modifyNavBg = () => {
			window.addEventListener('scroll', () => {
				if (window.scrollY >= 200) {
					headerNavWrap.classList.add('add-nav-bg');
				} else headerNavWrap.classList.remove('add-nav-bg');
			});
		};
		modifyNavBg();

		// redirect to admission page logic
		if (navBtn) {
			navBtn.addEventListener('click', () => {
				window.location.href = '/admission.html';
			});
		}

		// mobile menu logic
		const triggerMobileNav = () => {
			if (!burgerBtn) {
				return;
			} else {
				burgerBtn.addEventListener('click', () => {
					// alert('button clicked');
					mobileNav.classList.add('show-nav');
					closeNavBtn.addEventListener('click', () => {
						mobileNav.classList.remove('show-nav');
					});
				});
			}
		};

		triggerMobileNav();
	}
};
