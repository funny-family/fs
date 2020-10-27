const linkFinder = document.querySelector('.link-searcher');
const linkListContainer = document.querySelector('.link-list-container');
const searchResultField = document.querySelector('.search-result-field');

const HTMLLinkList = document.getElementsByTagName('a');
const linkList = [];
let filteredLinkList = [];

let linkListTemplate = null;

document.querySelector('.search-box-container').style.display = 'none';

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
    linkListContainer.innerHTML += `
      <li><a href="${filteredLinkList[i].href}">${filteredLinkList[i].text}</a></li>
    `;
  }
}

linkFinder.addEventListener('input', (event) => {
  const inputValue = event.target.value.toLowerCase();
  document.querySelector('.search-box-container').style.display = 'block';

  if (inputValue === '') {
    searchResultField.innerText = null;
    linkListContainer.innerHTML = null;
    document.querySelector('.search-box-container').style.display = 'none';
    return;
  }

  filteredLinkList = linkList.filter((link) => {

    // return link.loweCaseText.indexOf(inputValue) >= 0; // first option

    return inputValue
      .split('')
      .every((letter) => link.loweCaseText.indexOf(letter) >= 0); // second option
  });

  updateSearchResult();

  const linksFoundResult = filteredLinkList.length;
  searchResultField.innerText = `найдено ${filteredLinkList.length}`;

  if (linksFoundResult === 0) {
    linkListContainer.innerHTML = null;
    document.querySelector('.search-box-container').style.display = 'none';
    return;
  }

  console.log(filteredLinkList, linksFoundResult);
});
