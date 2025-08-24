let essayArray = [];
let analysisArray = [];
let reviewsArray = [];

class writing {
    constructor(path, type, title, subtitle, dateData, metaInfo){
        this._path = path;
        this._type = type;
        this._title = title;
        this._subtitle = subtitle;
        this._dateData = dateData;
        this._metaInfo = metaInfo
    }
}

class essay extends writing {
    constructor(path, type, title, subtitle, dateData, metaInfo, photoLink, firstLines){
        super(path, type, title, subtitle, dateData, metaInfo);
        this._length = length;
        this._photoLink = photoLink;
        this._firstLines = firstLines;
        essayArray.push(this);
    }
}

class analysis extends writing {
    constructor(path, type, title, subtitle, dateData, metaInfo, firstLines){
        super(path, type, title, subtitle, dateData, metaInfo);
        this._firstLines = firstLines;
        analysisArray.push(this);
    }
}

class reviews extends writing {
    constructor(path, type, title, subtitle, dateData, metaInfo, stars){
        super(path, type, title, subtitle, dateData, metaInfo);
        this._stars= stars;
        reviewsArray.push(this);
    }
}


let writings = [
new essay("./files/Essays/Essay1.html", "essay", "Essay 1", "The essay yall have been waiting for", [2025, 4, 28], '28th April 2025 | 3 Hours', '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', "My central argument is that, not only is Rousseau's 'forced to be free' not contradictory"), 
new essay("./files/Essays/Essay1.html", "essay", "Essay 2", "The essay yall have been waiting for", [2025, 4, 28], '28th April 2025 | 3 Hours', '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', "My central argument is that, not only is Rousseau's 'forced to be free' not contradictory"), 
new essay("./files/Essays/Essay1.html", "essay", "Essay 3", "The essay yall have been waiting for", [2025, 4, 28], '28th April 2025 | 3 Hours', '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', "My central argument is that, not only is Rousseau's 'forced to be free' not contradictory"), 
new essay("./files/Essays/Essay1.html", "essay", "Essay 4", "The essay yall have been waiting for", [2025, 4, 28], '28th April 2025 | 3 Hours', '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', "My central argument is that, not only is Rousseau's 'forced to be free' not contradictory"),
new essay("./files/Essays/Essay1.html", "essay", "Essay 5", "The essay yall have been waiting for", [2025, 4, 28], '28th April 2025 | 3 Hours', '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', "My central argument is that, not only is Rousseau's 'forced to be free' not contradictory"),
new essay("./files/Essays/Essay1.html", "essay", "Essay 6", "The essay yall have been waiting for", [2025, 4, 28], '28th April 2025 | 3 Hours', '<img src="https://www.nurseryworld.co.uk/media/0aipyhc5/f779371ec117aac5711bd52f0138d4fb.jpg?width=1002&height=668&bgcolor=White&v=1da4d833cc7c2f0"/>', "My central argument is that, not only is Rousseau's 'forced to be free' not contradictory"),

new reviews("path", "review", "Review 1", "remove substitile", "19th", "2 hours aho", 4),
new reviews("path", "review", "Review 2", "remove substitile", "19th", "2 hours aho", 4),
new reviews("path", "review", "Review 3", "remove substitile", "19th", "2 hours aho", 4),
new reviews("path", "review", "Review 4", "remove substitile", "19th", "2 hours aho", 4),
new reviews("path", "review", "Review 5", "remove substitile", "19th", "2 hours aho", 4),

new analysis("path", "analysis", "Analysis 1", "remove substitile", "19th", "2 hours aho", 4),
new analysis("path", "analysis", "Analysis 2", "remove substitile", "19th", "2 hours aho", 4),
new analysis("path", "analysis", "Analysis 3", "remove substitile", "19th", "2 hours aho", 4),
new analysis("path", "analysis", "Analysis 4", "remove substitile", "19th", "2 hours aho", 4),
new analysis("path", "analysis", "Analysis 5", "remove substitile", "19th", "2 hours aho", 4),



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
let j = [essayArray.length - 1, analysisArray.length - 1, reviewsArray.length - 1];
let i = 0;
let k = 2;

window.onload = function(){
    while (i<3){
        h=j[i]-2;
        while (h<=j[i]){
            document.getElementById(`title${i}${k}`).innerHTML = masterArray[i][h]._title;
            document.getElementById(`subtitle${i}${k}`).innerHTML = masterArray[i][h]._subtitle;
            document.getElementById(`metaInfo${i}${k}`).innerHTML = masterArray[i][h]._metaInfo;
            h++;
            k--;
            console.log(`h=${h}, j=${j}, k=${k}`)
        }
        i++;
        console.log(`i=${i}`)
        k=2;
    }
    document.getElementById('photoLink1').innerHTML = essayArray[j[0]-1]._photoLink;
};


