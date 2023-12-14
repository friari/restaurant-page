import { navItems, menuItems } from './data';

export const reset = () => {
  let currentPage = document.getElementById('page');
  if (currentPage) currentPage.remove();
}

export const determineHasLink = (componentType) => {
  const componentTypesWithLinks = ['home', 'menu', 'contact'];
  return componentTypesWithLinks.includes(componentType);
}

export const determineAdditionalArgs = (componentType) => {
  const componentsWithArgs = {
    header: [navItems],
    home: [navItems],
    menu: [menuItems],
  }
  return componentsWithArgs[componentType];
}
