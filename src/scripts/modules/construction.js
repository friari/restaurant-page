import { navItems } from './data';

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
