import { buildNavItems } from './construction';

const buildLogo = () => {
  const logoContainer = document.createElement('div');
  const logo = document.createElement('a');
  const logoSpanTop = document.createElement('span');
  const logoSpanBottom = document.createElement('span');

  logo.setAttribute('data-link', 'home');

  logoContainer.classList.add('logo__container');
  logo.classList.add('logo');

  logoSpanTop.innerText = "Jetty's";
  logoSpanBottom.innerText = "Diner";

  logo.appendChild(logoSpanTop);
  logo.appendChild(logoSpanBottom);
  logoContainer.appendChild(logo);

  return logoContainer;
}

const buildHeader = (navItems) => {
  const header = document.createElement('div');
  const headerTop = document.createElement('div');
  const headerBottom = document.createElement('div');
  const nav = buildNavItems(navItems);

  header.setAttribute('id', 'header');
  header.classList.add('header');
  headerTop.classList.add('header__top');
  headerBottom.classList.add('header__bottom');

  headerTop.appendChild(buildLogo());
  headerBottom.appendChild(nav);

  header.append(headerTop, headerBottom);

  return header;
}

export default buildHeader;