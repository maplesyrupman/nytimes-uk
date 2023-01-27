//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=pCGjUFz1XWz97cwQyZvCmFADcgNxZfNb
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchText = event.target[0].value;
  const NoofRecords =
    event.target[1].options[event.target[1].selectedIndex].text;
  const startYear = event.target.elements[2].value;
  const endYear = event.target.elements[3].value;
  console.log(endYear);
});
