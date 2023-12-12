import buildHome from './home';
import buildMenu, { menuItems } from './menu';
import buildContact from './contact';

export const reset = () => {
  let currentPage = document.getElementById('page');
  if (currentPage) currentPage.remove();
}

const loadHomePage = (e, contentDiv, navItems) => {
  e.preventDefault();
  reset();
  contentDiv.appendChild(buildHome(navItems));
  attachEventListeners(contentDiv);
}

const loadMenuPage = (e, contentDiv, menuItems) => {
  e.preventDefault();
  reset();
  contentDiv.appendChild(buildMenu(menuItems));
}

const loadContactPage = (e, contentDiv) => {
  e.preventDefault();
  reset();
  contentDiv.appendChild(buildContact());
}

export const navItems = ['Menu', 'Contact'];

export const buildNavItems = (navItems) => {
  const nav = document.createElement('nav');
  const navList = document.createElement('ul');

  nav.classList.add('nav');
  navList.classList.add('nav__list');

  navItems.forEach((item) => {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');

    navItem.setAttribute('data-link', item.toLowerCase());

    navItem.classList.add('nav__list-item');
    navLink.classList.add('nav__list-link');
    navLink.textContent = item;

    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });

  nav.appendChild(navList);

  return nav;
}

export function attachEventListeners(contentDiv) {
  let homeLinks = document.querySelectorAll('[data-link="home"]');
  let menuLinks = document.querySelectorAll('[data-link="menu"]');
  let contactLinks = document.querySelectorAll('[data-link="contact"]');

  homeLinks.forEach(item => item.addEventListener('click', (e) => loadHomePage(e, contentDiv, navItems)));
  menuLinks.forEach(item => item.addEventListener('click', (e) => loadMenuPage(e, contentDiv, menuItems)));
  contactLinks.forEach(item => item.addEventListener('click', (e) => loadContactPage(e, contentDiv)));
}