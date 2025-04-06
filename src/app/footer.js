import { footer } from './variables';
import footerLogo from '../assets/brand-logo.png';
import whatsappIcon from '../assets/whatsapp.png';

const footerTemplate = () => {
	return `
    <div class="container">
      <div class="wrap">
        <div class="brand-wrap">
          <img src="${footerLogo}" alt="" />
        </div>

        <div class="contact-details">
          <div class="email-wrap">
            <div class="icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <p class="email">hello@yabsom.school</p>
          </div>

          <div class="phone-wrap">
            <div class="icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <p class="phone">+234(0) 811 183 4734</p>
          </div>
        </div>
      </div>

      <div class="wrap">
        <h4 class="heading">About</h4>

        <ul class="footer-nav">
          <li><a href="/about.html" class="link">About Yabsom</a></li>
          <li><a href="/contact.html" class="link">Contact us</a></li>
          <li><a href="/careers.html" class="link">Careers</a></li>
        </ul>
      </div>

      <div class="wrap">
        <h4 class="heading">Resources</h4>

        <ul class="footer-nav">
          <li><a href="" class="link">Registration</a></li>
          <li><a href="" class="link">Admissions us</a></li>
        </ul>
      </div>
      <div class="wrap">
        <h4 class="heading">Get in touch</h4>

        <div class="wrapper">
          <p class="sub-text">
            Questions or feedback? <br />
            We’d love to hear from you
          </p>

          <div class="footer-social-icons">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <img src="${whatsappIcon}" alt="" />
          </div>
        </div>
      </div>
    </div>
  `;
};

export const loadFooterTemplate = () => {
	if (!footer) {
		alert('Footer element not on this page');
	} else {
		footer.innerHTML = footerTemplate();
	}
};
