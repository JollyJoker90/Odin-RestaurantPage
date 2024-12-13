import image from "./res/trocadero.jpg";

function ShowHome() {
  const homeContainer = document.createElement("div");
  const heading = document.createElement("h1");
  heading.textContent = "Trocadero";

  const img = document.createElement("img");
  img.src = image;

  const descrition = document.createElement("p");
  descrition.textContent = "This restaurant is awesome!!";

  homeContainer.append(heading, img, descrition);
  document.querySelector("#content").append(homeContainer);
}

export { ShowHome };
