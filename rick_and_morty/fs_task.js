const linkFinder = document.querySelector('.link-searcher');
const linkListContainer = document.querySelector('.link-list-container');
const searchResultField = document.querySelector('.search-result-field');

const HTMLLinkList = document.getElementsByTagName('a');
const linkList = [];
let filteredLinkList = [];

let linkListTemplate = null;
// let linksFoundResult = 0;

for (let i = 0; i < HTMLLinkList.length; i++) {
  const href = HTMLLinkList[i].href;
  const text = HTMLLinkList[i].innerText;

  linkList.push({
    href,
    text,
    loweCaseText: text.toLowerCase()
  });
}

function updateSearchResult() {
  for (let i = 0; i < filteredLinkList.length; i++) {
    linkListTemplate = `
      <a href="${filteredLinkList[i].href}">${filteredLinkList[i].text}</a>
    `;

    linkListContainer.innerHTML = linkListTemplate;
  }
}

updateSearchResult();

linkFinder.addEventListener('input', (event) => {
  const inputValue = event.target.value.toLowerCase();

  if (inputValue === '') {
    searchResultField.innerText = null;
    linkListContainer.innerHTML = null;
    return;
  }

  filteredLinkList = linkList.filter((link) => {
    return link.loweCaseText.indexOf(inputValue) >= 0; // first variant

    // return inputValue
    //   .split('')
    //   .every((letter) => link.loweCaseText.indexOf(letter) >= 0); // second variant
  });

  updateSearchResult();

  // for (let i = 0; i < filteredLinkList.length; i++) {
  //     linkListContainer.innerHTML += `
  //     <li><a href="${filteredLinkList[i].href}">${filteredLinkList[i].text}</a></li>
  //   `;
  // }

  const linksFoundResult = filteredLinkList.length;
  searchResultField.innerText = `найдено ${linksFoundResult}`;

  if (linksFoundResult === 0) {
    linkListContainer.innerHTML = null;
    return;
  }

  console.log(filteredLinkList, linksFoundResult);
});
