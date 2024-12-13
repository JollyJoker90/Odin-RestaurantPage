import "./styles.css";
import { ShowHome } from "./home";
import { ShowMenu } from "./menu";
import { ShowAbout } from "./about";

ShowHome();

const handleButtonClick = (e) => {
  console.log(e.target.id);
  document.querySelector("#content").innerHTML = "";
  switch (e.target.id) {
    case "home-button":
      ShowHome();
      break;
    case "menu-button":
      ShowMenu();
      break;
    case "about-button":
      ShowAbout();
      break;
  }
};

document
  .querySelectorAll("nav button")
  .forEach((button) => button.addEventListener("click", handleButtonClick));

console.log("test");
