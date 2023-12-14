import { reset, determineHasLink, determineAdditionalArgs } from './utils';
import buildHeader from './header';
import buildHome from './home';
import buildMenu from './menu';
import buildContact from './contact';

export const getLoader = (componentType) => {
  const loaderFunctions = {
    header: buildHeader,
    home: buildHome,
    menu: buildMenu,
    contact: buildContact
  }

  return loaderFunctions[componentType];
}

export const loadComponent = (pageLoader, contentDiv, attachListeners = false, additionalArgs = []) => {
  reset();
  const page = pageLoader(...additionalArgs);
  contentDiv.appendChild(page);
  if (!attachListeners) return;
  attachEventListeners(contentDiv, page, loadComponent);
}

export function attachEventListeners(contentDiv, container, listener) {
  let containerLinks = container.querySelectorAll('[data-link]');

  containerLinks.forEach(item => {
    const linkTo = item.dataset.link;
    const build = getLoader(linkTo);
    const hasListeners = determineHasLink(linkTo);
    const additionalArgs = determineAdditionalArgs(linkTo);
    item.addEventListener('click', () => {
      listener(build, contentDiv, hasListeners, additionalArgs);
    });
  });
}