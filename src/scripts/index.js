import { attachEventListeners, navItems } from './modules/construction';
import buildHeader from './modules/header';
import buildHome from './modules/home';

const init = () => {
  const contentDiv = document.getElementById('content');
  contentDiv.appendChild(buildHeader(navItems));
  contentDiv.appendChild(buildHome(navItems));
  attachEventListeners(contentDiv);
}

export default init;