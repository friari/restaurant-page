import { buildNavItems } from './construction';

const buildHome = (navItems) => {
  const homePage = document.createElement('div');
  const homeContainer = document.createElement('div');
  const homeNav = buildNavItems(navItems);

  homePage.classList.add('home', 'page');
  homePage.setAttribute('id', 'page');

  homeContainer.classList.add('home__container');
  homeNav.classList.add('home__nav');

  homeContainer.appendChild(homeNav);
  homePage.appendChild(homeContainer);
  
  return homePage;
}

export default buildHome;