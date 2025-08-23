function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

let body = loadFile('./poem.txt');

console.log(body);















/* const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');

fs.readFile('./poem.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});
 */











/* const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});

function updateDisplay(verse) {
    verse = verse.replace(" ", "").toLowerCase();
    const url = `${verse}.txt`;
}

fetch(url)
    .then(response => {
    if (!response.ok) {
        throw new Error(`Could not fetch ${url}`);
    }
    return response.text();
    })
    .then(text => {
    poemDisplay.textContent = text;
    })
    .catch(error => {
    poemDisplay.textContent = "Error loading poem.";
    console.error(error);
    });


 */

/* function load() {
    var file = new XMLHttpRequest();
    file.open("GET", "http://remote.tld/random.txt", true);
    file.onreadystatechange = function() {
      if (file.readyState === 4) {  // Makes sure the document is ready to parse
        if (file.status === 200) {  // Makes sure it's found the file
          text = file.responseText;
          document.getElementById("div1").innerHTML = text;
        }
      }
    }
}

window.onLoad = load();

const fs = require('fs');

      
Here we use fs.readfile() and callback functions:


// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8');
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});
 */
// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
/* async function readFiles() {
  let firstSentence = await promisifiedReadfile('./Essays/Essay1.txt', 'utf-8');
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8');
  console.log(firstSentence, secondSentence);
}

console.log(readFiles()); */


