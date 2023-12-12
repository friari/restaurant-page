import { attachEventListeners, navItems } from './modules/construction';
import buildHeader from './modules/header';
import buildHome from './modules/home';
import buildMenu, { menuItems } from './modules/menu';
import buildContact from './modules/contact';

const init = () => {
  const contentDiv = document.getElementById('content');
  contentDiv.appendChild(buildHeader(navItems));
  contentDiv.appendChild(buildHome(navItems));
  attachEventListeners(contentDiv);
}

export default init;