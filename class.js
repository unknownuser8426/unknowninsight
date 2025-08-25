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
    constructor(path, title, metaInfo, subtitle, firstFewLines){
        super(path, title, metaInfo, subtitle);
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
new essay("./files/Essays/Essay1.html", "Essay 3",'28th April 2025 | 3 Hours', "The essay yall have been waiting for", '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', `My central argument is that, not only is Rousseau's 'forced to be free' not contradictory, but that Rousseau's community based concept o`  ),
new essay("./files/Essays/Essay1.html", "Essay 4",'28th April 2025 | 3 Hours', "The essay yall have been waiting for", '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', `My central argument is that, not only is Rousseau's 'forced to be free' not contradictory, but that Rousseau's community based concept o`  ),
new essay("./files/Essays/Essay1.html", "Essay 5",'28th April 2025 | 3 Hours', "The essay yall have been waiting for", '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', `My central argument is that, not only is Rousseau's 'forced to be free' not contradictory, but that Rousseau's community based concept o`  ),
new essay("./files/Essays/Essay1.html", "Essay 6",'28th April 2025 | 3 Hours', "The essay yall have been waiting for", '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', `My central argument is that, not only is Rousseau's 'forced to be free' not contradictory, but that Rousseau's community based concept o`  ),

new reviews("path", "Review 1", "28th April 2025", "4/5"),
new reviews("path", "Review 2", "28th April 2025", "7.65/2"),
new reviews("path", "Review 3", "28th April 2025", "4/24"),

new analysis("path", "Analysis 1", "28th April 2025", "subtitle"),
new analysis("path", "Analysis 2", "28th April 2025", "subtitle"),
new analysis("path", "Analysis 3", "28th April 2025", "subtitle"),
];

let masterArray = [];
masterArray.push(essayArray);
masterArray.push(analysisArray);
masterArray.push(reviewsArray);
console.log(masterArray);

/* 
Im going to do my best to explain this
J gets the amount of each writing types, this still requires at least three
It the cycles through the 3 most recent giving each of them a value that is then used in the html file to fill that data in
*/
 
window.onload = function(){
    if (document.getElementById(`masTitle`).innerHTML === "UnknownInsight"){
        console.log(document.getElementById(`masTitle`).innerHTML);
        let j = [essayArray.length - 1, analysisArray.length - 1, reviewsArray.length - 1];
        let i = 0;
        let k = 2;  
        document.getElementById('photoLink1').innerHTML = essayArray[j[0]]._photoLink
        while (i<3){
            h=j[i]-2;
            while (h<=j[i]){
                document.getElementById(`title${i}${k}`).innerHTML = masterArray[i][h]._title;
                document.getElementById(`subtitle${i}${k}`).innerHTML = masterArray[i][h]._subtitle;
                document.getElementById(`metaInfo${i}${k}`).innerHTML = masterArray[i][h]._metaInfo;
                h++;
                k--;
                console.log(`h=${h}, j=${j}, k=${k}`);
            }
            i++;
            console.log(`i=${i}`);
            k=2;
        }
    }else if (document.getElementById(`masTitle`).innerHTML === "UnknownInsight|Essays"){
        console.log(document.getElementById(`masTitle`).innerHTML);
        let h = ''
        let i = ''
        let j = essayArray.length - 1;
        while (j>=0){
            i = (`<div id = subList${j}></div>`);
            h = h+i;
            j--;
             console.log(`i=${i}, h=${h}, j=${j}`);
        }
        document.getElementById(`list`).innerHTML = h;
        j = essayArray.length - 1;
        while (j>=0){
            document.getElementById(`subList${j}`).innerHTML = (
                `<div class="centre"><div class ="left">${essayArray[j]._photoLink}</div><div class="right"><h2>${essayArray[j]._title}</h2><h3>${essayArray[j]._subtitle}</h3><p>${essayArray[j]._metaInfo} <p>${essayArray[j]._firstFewLines}</p></div> </div>`
            )
            j--;
        }

    }
   
};


