import './scss/main.scss';

// importing modules
import { loadNavbar } from './app/navbar';
import { loadFooterTemplate } from './app/footer';
import { expandPresAddress } from './app/pres-address-script';
import { alertUser } from './app/script';
// console.log('Hello, Webpack!');

loadNavbar();
loadFooterTemplate();
expandPresAddress();
// alertUser();
