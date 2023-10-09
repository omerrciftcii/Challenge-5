let aboutNavButton = document.getElementById("aboutButton");
let aboutSection = document.getElementById("about");
let portfolioNavButton = document.getElementById("portfolioButton");
let portfolioSection = document.getElementById("portfolio");
let featureNavButton = document.getElementById("feature");
let featureSection = document.getElementById("features");

let expansionSummary = document.getElementById("summary-1");
let expansionDetail = document.getElementById("detail-1");
let expansionTile = document.getElementById("expansion-tile");

expansionDetail.style.visibility = "hidden";

aboutNavButton.addEventListener(
  "click",
  function (e) {
    aboutSection.scrollIntoView({
      behavior: "smooth",
    });
  },
  true
);
portfolioNavButton.addEventListener(
  "click",
  function () {
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  },
  false
);

//Expansion Tile//

let expansionTileList = [
  {
    id: "1",
    summary: "Sky was cloudless",
    detail:
      "By the same illusion which lifts thehorizon of the sea to the levelof the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float.",
  },
  {
    id: "2",
    summary: "Sky was cloudless",
    detail:
      "By the same illusion which lifts thehorizon of the sea to the levelof the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float.",
  },
  {
    id: "3",
    summary: "Sky was cloudless",
    detail:
      "By the same illusion which lifts thehorizon of the sea to the levelof the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float.",
  },
  {
    id: "4",
    summary: "Sky was cloudless",
    detail:
      "By the same illusion which lifts thehorizon of the sea to the levelof the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float.",
  },
];
let parent = document.querySelectorA("#faq");

function addElementsToExpansionTile() {
  expansionTileList.forEach((element) => {
    let div = document.createElement("div");
    div.className = "expansion-tile";
    div.id = element.id;

    // Create summary div
    // var summary = document.createElement("div");
    // summary.className = "summary";
    // var summaryText = document.createElement("p");
    // summaryText.className = "big-title margin-left-1rem margin-top-1rem";
    // summaryText.innerHTML = element.summary;
    // summary.appendChild(summaryText);

    // // Create expansionTileIcon (assuming it's an <i> element)
    // var expansionTileIcon = document.createElement("i");
    // expansionTileIcon.className =
    //   "material-symbols-outlined margin-right-1rem margin-top-1rem";
    // expansionTileIcon.innerHTML = "expa"; // Replace with the desired content
    // summary.appendChild(expansionTileIcon);

    // // Create detail div
    // var detail = document.createElement("div");
    // detail.className = "detail";
    // var detailText = document.createElement("p");
    // detailText.className =
    //   "medium-title margin-left-1rem margin-top-1rem margin-right-1rem";
    // detail.appendChild(detailText);

    // // Append summary and detail to the main div
    // div.appendChild(summary);
    // div.appendChild(detail);

    // Now, you can use the 'div' element as needed
  });
}

expansionSummary.onclick = () => {
  if (expansionDetail.style.visibility == "hidden") {
    expansionDetail.style.visibility = "visible";
    expansionTile.style.height = "12rem";
    expansionSummary.children[1].innerHTML = "expand_less";
  } else {
    expansionDetail.style.visibility = "hidden";
    expansionTile.style.height = "4rem";
    expansionSummary.children[1].innerHTML = "expand_more";
  }
};
