const buildMenuList = (menuItemsArr) => {
  const menuList = document.createElement('ul');

  menuItemsArr.forEach(item => {
    const menuItemWrapper = document.createElement('li');
    const menuItem = document.createElement('div');
    const menuItemName = document.createElement('p');
    const menuItemDivider = document.createElement('div');
    const menuItemPrice = document.createElement('p');

    menuItemWrapper.classList.add('menu__item-wrapper');
    menuItem.classList.add('menu__item');
    menuItemName.classList.add('menu__item-name');
    menuItemDivider.classList.add('dot');
    menuItemPrice.classList.add('menu__item-price');

    menuItemName.textContent = item.name;
    menuItemPrice.textContent = item.price;

    menuItem.appendChild(menuItemName);
    menuItem.appendChild(menuItemDivider);
    menuItem.appendChild(menuItemPrice);
    menuItemWrapper.appendChild(menuItem);
    menuList.appendChild(menuItemWrapper);
  });

  return menuList;
}

const buildMenu = (menuItemsArr) => {
  const menuPage = document.createElement('div');
  const menuContainer = document.createElement('div');
  const menuHeader = document.createElement('h1');
  const menuList = buildMenuList(menuItemsArr);

  menuPage.classList.add('menu', 'page');
  menuPage.setAttribute('id', 'page');
  
  menuContainer.classList.add('menu__container');
  menuHeader.classList.add('menu__header');
  menuList.classList.add('menu__items');

  menuHeader.textContent = 'Menu';

  menuContainer.appendChild(menuHeader);
  menuContainer.appendChild(menuList);
  menuPage.appendChild(menuContainer);

  return menuPage;
}

export default buildMenu;