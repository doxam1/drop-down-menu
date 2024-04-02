import DropDownMenu from "./DropDownMenu.js";

const moreMenuItem = document.querySelector(".menuItem.more");

moreMenuItem.onmouseover = (e) => {
  DropDownMenu(e.target);
};
