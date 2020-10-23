const linkFinder = document.querySelector('.link-searcher__input');
const linkListContainer = document.querySelector('.link-list-container');

const HTMLLinkList = document.getElementsByTagName('a');
const linkList = [];
let filteredLinkList = [];

for (let i = 0; i < HTMLLinkList.length; i++) {
  const href = HTMLLinkList[i].href;
  const text = HTMLLinkList[i].innerText;

  linkList.push({
    href,
    text,
    loweCaseText: text.toLowerCase()
  });
}

linkFinder.addEventListener('input', (event) => {
  const inputValue = event.target.value.toLowerCase();

  if (inputValue === '') return;

  filteredLinkList = linkList.filter((link) => {
    return link.loweCaseText.indexOf(inputValue) >= 0;
  });

  console.log(filteredLinkList);
});

// console.log(linkList); 

// const filteredLinkList = linkList.filter((elem) => {
//   //
// });
// console.log(filteredLinkList);
