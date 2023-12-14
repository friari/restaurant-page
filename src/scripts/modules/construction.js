import buildHome from './home';
import buildMenu, { menuItems } from './menu';
import buildContact from './contact';

export const reset = () => {
  let currentPage = document.getElementById('page');
  if (currentPage) currentPage.remove();
}

export const loadComponent = (pageLoader, contentDiv, attachListeners = false, additionalArgs = []) => {
  reset();
  const page = pageLoader(...additionalArgs);
  contentDiv.appendChild(page);
  if (!attachListeners) return;
  attachEventListeners(contentDiv, page);
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

export function attachEventListeners(contentDiv, container, listener) {
  let containerLinks = container.querySelectorAll('[data-link]');

  containerLinks.forEach(item => {
    const linkTo = item.getAttribute('data-link').charAt(0).toUpperCase() + item.getAttribute('data-link').slice(1);
    item.addEventListener('click', () => {
      listener(eval(`build${linkTo}`), contentDiv, eval(linkTo === 'Home'), eval(`${linkTo === "Menu" ? eval(`${item.getAttribute('data-link')}Items`) : null}`));
    });
  });
}