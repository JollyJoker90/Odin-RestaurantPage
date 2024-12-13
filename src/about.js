function ShowAbout() {
  const aboutContainer = document.createElement("div");

  const aboutHeading = document.createElement("h1");
  aboutHeading.textContent = "About";

  const aboutContent = document.createElement("p");
  aboutContent.textContent = `Restaurant TROCADERO
    deutsch-mediterrane und saisonbezogene Küche`;

  aboutContainer.append(aboutHeading, aboutContent);

  document.querySelector("#content").append(aboutContainer);
}

export { ShowAbout };
