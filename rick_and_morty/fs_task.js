const linkFinder = document.querySelector('.link-searcher__input');
const linkListContainer = document.querySelector('.link-list-container');

const linkList = [].slice.call(document.getElementsByTagName('a'));

// const linkItem = document.createElement('li');

console.log('linkList:', linkList);

// const linkListContainerTemplate = `
//   <li>${}</li>
// `;

// console.log(linkListContainer);


linkFinder.addEventListener('input', (event) => {
  const inputValue = event.target.value;

  console.log(inputValue);
});

for (let i = 0; i < linkList.length; i++) {
  if (linkList[i].innerText !== '') {
    linkListContainer.innerHTML = `
      <li>
        <a href="${linkList[i].href}">${linkList[i].innerText}</a>
      </li>
    `;

    // linkListContainer.innerHTML = linkTag[i].outerHTML;

    // linkListContainer = linkItem.innerHTML = linkTag[i];
    // linkListContainer.innerHTML =

    // console.log(linkList[i]);

    // console.log();
    // console.log(i, linkTag[i].innerText);
  }
}
