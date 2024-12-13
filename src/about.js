function ShowAbout() {
  const aboutContainer = document.createElement("div");

  const aboutHeading = document.createElement("h1");
  aboutHeading.textContent = "About";

  aboutContainer.append(aboutHeading);

  document.querySelector("#content").append(aboutContainer);
}

export { ShowAbout };
