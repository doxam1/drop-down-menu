export default function DropDownMenu(e) {
  e.querySelector(".moreDiv").classList.add("visible");

  e.onmouseleave = () => {
    e.querySelector(".moreDiv").classList.remove("visible");
  };
}
