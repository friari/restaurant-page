import { loadComponent } from './modules/loaders';
import { navItems } from './modules/data';
import buildHeader from './modules/header';
import buildHome from './modules/home';

const init = () => {
  const contentDiv = document.getElementById('content');
  const header = buildHeader(navItems);
  loadComponent(buildHeader, contentDiv, true, [navItems]);
  loadComponent(buildHome, contentDiv, true, [navItems]);
}

export default init;