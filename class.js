let essayArray = [];
let analysisArray = [];
let reviewsArray = [];

class writing {
    constructor(path, title, metaInfo, subtitle){
        this._path = path;
        this._title = title;
        this._metaInfo = metaInfo
        this._subtitle = subtitle;
    }
}

class essay extends writing {
    constructor(path, title, metaInfo, subtitle, photoLink, firstFewLines){
        super(path, title, metaInfo, subtitle);
        this._photoLink = photoLink;
        this._firstFewLines = firstFewLines;
        essayArray.push(this);
    }
}

class analysis extends writing {
    constructor(path, title, metaInfo, subtitle, photoLink, firstFewLines){
        super(path, title, metaInfo, subtitle);
        this._photoLink = photoLink;
        this._firstFewLines = firstFewLines;
        analysisArray.push(this);
    }
}

class reviews extends writing {
    constructor(path, title, metaInfo, subtitle){
        super(path, title, metaInfo, subtitle);
        reviewsArray.push(this);
    }
}


let writings = [
new essay("./files/Essays/Essay1.html", "Essay 1",'28th April 2025 | 3 Hours', "The essay yall have been waiting for", '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', `My central argument is that, not only is Rousseau's 'forced to be free' not contradictory, but that Rousseau's community based concept o` ),
new essay("./files/Essays/Essay1.html", "Essay 2",'28th April 2025 | 3 Hours', "The essay yall have been waiting for", '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', `My central argument is that, not only is Rousseau's 'forced to be free' not contradictory, but that Rousseau's community based concept o` ),
new essay("./files/Essays/Essay1.html", "Essay 3",'28th April 2025 | 3 Hours', "The essay yall have been waiting for", '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', `My central argument is that, not only is Rousseau's 'forced to be free' not contradictory, but that Rousseau's community based concept o` ),
, 

new reviews("path", "Review 1", "28th April 2025", "4/5"),
new reviews("path", "Review 2", "28th April 2025", "7.65/2"),
new reviews("path", "Review 3", "28th April 2025", "4/24" ),

new analysis("path", "Analysis 1", "28th April 2025", "subtitle", `<img src="https://www.reuters.com/resizer/v2/ALWKFOKC3RLAVN5SO4A7HQ5MIU.jpg?auth=4fce2ddb21a0e3b9a2a4b413abc91d87b42968ef02c08218705a3c6142532c5b&width=6000&quality=80"/>`, 'Populism gets a lot of media coverage by those in the establishment and they are very sure that Sinn Féin is a left populist party. Wh'),
new analysis("path", "Analysis 2", "28th April 2025", "subtitle", `<img src="https://www.reuters.com/resizer/v2/ALWKFOKC3RLAVN5SO4A7HQ5MIU.jpg?auth=4fce2ddb21a0e3b9a2a4b413abc91d87b42968ef02c08218705a3c6142532c5b&width=6000&quality=80"/>`, 'Populism gets a lot of media coverage by those in the establishment and they are very sure that Sinn Féin is a left populist party. Wh'),
new analysis("path", "Analysis 3", "28th April 2025", "subtitle", `<img src="https://www.reuters.com/resizer/v2/ALWKFOKC3RLAVN5SO4A7HQ5MIU.jpg?auth=4fce2ddb21a0e3b9a2a4b413abc91d87b42968ef02c08218705a3c6142532c5b&width=6000&quality=80"/>`, 'Populism gets a lot of media coverage by those in the establishment and they are very sure that Sinn Féin is a left populist party. Wh'),
new analysis("path", "Analysis 4", "28th April 2025", "subtitle", `<img src="https://www.reuters.com/resizer/v2/ALWKFOKC3RLAVN5SO4A7HQ5MIU.jpg?auth=4fce2ddb21a0e3b9a2a4b413abc91d87b42968ef02c08218705a3c6142532c5b&width=6000&quality=80"/>`, 'Populism gets a lot of media coverage by those in the establishment and they are very sure that Sinn Féin is a left populist party. Wh'),
new analysis("path", "Analysis 5", "28th April 2025", "subtitle", `<img src="https://www.reuters.com/resizer/v2/ALWKFOKC3RLAVN5SO4A7HQ5MIU.jpg?auth=4fce2ddb21a0e3b9a2a4b413abc91d87b42968ef02c08218705a3c6142532c5b&width=6000&quality=80"/>`, 'Populism gets a lot of media coverage by those in the establishment and they are very sure that Sinn Féin is a left populist party. Wh'),];

let masterArray = [];
masterArray.push(essayArray);
masterArray.push(analysisArray);
masterArray.push(reviewsArray);
console.log(masterArray);

/* function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
  console.log(loadFile('./Essays/Essay1.txt'));
} */

/* 
Im going to do my best to explain this
J gets the amount of each writing types, this still requires at least three
It the cycles through the 3 most recent giving each of them a value that is then used in the html file to fill that data in
*/
 
window.onload = function(){
    if (document.getElementById(`masTitle`).innerHTML === "UnknownInsight"){
        console.log(document.getElementById(`masTitle`).innerHTML);
        var j = [essayArray.length - 1, analysisArray.length - 1, reviewsArray.length - 1];
        document.getElementById('photoLink1').innerHTML = essayArray[j[0]]._photoLink;
        document.getElementById('headEssay').innerHTML = (`<h2>${essayArray[j[0]]._title}</h2> <h4>${essayArray[j[0]]._subtitle}</h4> <p>${essayArray[j[0]]._metaInfo}</p>`);
        var i = 0;
        while (i<3){
            let h = ''
            var k = 2;
            var m = 0;  
            while (m<3){
                var l = (`<div id = title${i}${m}></div>`);
                h = h+l;
                m++;
                console.log(`i=${i}, h=${h}, j=${j}`);
            }
            document.getElementById(`masTether${i}`).innerHTML = h;
            n = 2;
            while (n>j[i]){
                n--;
                console.log(n);
            }
            h=j[i]-n;
            console.log(`j[i]=${j[i]}`);
            if (masterArray[i]===essayArray && j[i]>0){
                j[i]=j[i]-1;
                console.log(`j[i]=${j[i]}`);
            }
            while (h<=j[i]){
                console.log(`h=${h}, j=${j}, k=${k}`);
                document.getElementById(`title${i}${k}`).innerHTML = (` <h4>${masterArray[i][h]._title}</h4><p>${masterArray[i][h]._subtitle}</p><p>${masterArray[i][h]._metaInfo}</p>`);
                h++;
                k--;
                console.log(`h=${h}, j=${j}, k=${k}`);
            }
            h='';
            i++;
            console.log(`i=${i}`);
            k=2;
        }
    }else if (document.getElementById(`masTitle`).innerHTML === "UnknownInsight|Essays" || document.getElementById(`masTitle`).innerHTML === "UnknownInsight|Analysis" ){
        if (document.getElementById(`masTitle`).innerHTML === "UnknownInsight|Essays" ){
            var usedArray = essayArray;
        }else if (document.getElementById(`masTitle`).innerHTML === "UnknownInsight|Analysis" ){
            var usedArray = analysisArray;
        }
        console.log(document.getElementById(`masTitle`).innerHTML);
        let h = ''
        let i = ''
        let j = usedArray.length - 1;
        while (j>=0){
            i = (`<div id = subList${j}></div>`);
            h = h+i;
            j--;
             console.log(`i=${i}, h=${h}, j=${j}`);
        }
        document.getElementById(`list`).innerHTML = h;
        j = usedArray.length - 1;
        while (j>=0){
            document.getElementById(`subList${j}`).innerHTML = (
                `<div class="centre"><div class ="left">${usedArray[j]._photoLink}</div><div class="right"><h2>${usedArray[j]._title}</h2><h3>${usedArray[j]._subtitle}</h3><p>${usedArray[j]._metaInfo} <p>${usedArray[j]._firstFewLines}</p></div> </div>`
            )
            j--;
        }
    }else if (document.getElementById(`masTitle`).innerHTML === "UnknownInsight|Reviews"){
        console.log(document.getElementById(`masTitle`).innerHTML);
        let h = ''
        let i = ''
        let j = reviewsArray.length - 1;
        while (j>=0){
            i = (`<div id = subList${j}></div>`);
            h = h+i;
            j--;
             console.log(`i=${i}, h=${h}, j=${j}`);
        }
        document.getElementById(`list`).innerHTML = h;
        j = reviewsArray.length - 1;
        while (j>=0){
            document.getElementById(`subList${j}`).innerHTML = (
                `<div class="centre"><div class ="left">${reviewsArray[j]._photoLink}</div><div class="right"><h2>${reviewsArray[j]._title}</h2><h3>${reviewsArray[j]._subtitle}</h3><p>${reviewsArray[j]._metaInfo} <p>${reviewsArray[j]._firstFewLines}</p></div> </div>`
            )
            j--;
        }
    }
   
};




