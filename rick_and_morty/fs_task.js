const linkFinder = document.querySelector('.link-searcher__input');
const linkListContainer = document.querySelector('.link-list-container');

const linkList = [].slice.call(document.getElementsByTagName('a'));

// const linkItem = document.createElement('li');

console.log('linkList:', linkList);

// const linkListContainerTemplate = `
//   <li>${}</li>
// `;

// https://stackoverflow.com/questions/31829826/print-javascript-array-in-html
// https://www.google.com/search?ei=Kr6RX5upCOmgrgTz_LmQCg&q=js+print+data+from+array+to+html&oq=js+print+data+from+array+to+h&gs_lcp=CgZwc3ktYWIQAxgAMggIIRAWEB0QHjoECAAQQzoICAAQsQMQgwE6BQgAELEDOgIIADoFCC4QsQM6BwgAELEDEEM6BggAEBYQHjoICAAQFhAKEB5Qs8EJWJ3PCmDW3QpoBnABeACAAcsBiAGeIpIBBjAuMzIuMZgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab
// https://stackoverflow.com/questions/44127872/convert-array-of-objects-into-html-table-with-jquery-or-javascript
// https://www.google.com/search?ei=Ub-RX8y3K-_2qwGp3ZiwBA&q=javascript+array+of+objects+to+html+table&oq=js+array+of+objects+in+ht&gs_lcp=CgZwc3ktYWIQAxgBMgYIABAWEB4yBggAEBYQHjoECAAQRzoECAAQQzoCCAA6CAghEBYQHRAeUMQSWJs5YNtYaARwAngAgAGeAYgBxgqSAQQwLjEwmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab


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
