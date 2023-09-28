let aboutNavButton = document.getElementById("aboutButton");
let aboutSection = document.getElementById("about");
let portfolioNavButton = document.getElementById("portfolioButton");
let portfolioSection = document.getElementById("portfolio");
let featureNavButton = document.getElementById("feature");
let featureSection = document.getElementById("features");
aboutNavButton.addEventListener(
  "click",
  function (e) {
    aboutSection.scrollIntoView({
      behavior: "smooth",
    });
  },
  true,
);
portfolioNavButton.addEventListener(
  "click",
  function () {
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  },
  false,
);
