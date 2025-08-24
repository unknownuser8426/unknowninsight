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

new reviews("path", "review1", "Review 1", "remove substitile", "19th", "2 hours aho", 4),
new reviews("path", "review2", "Review 1", "remove substitile", "19th", "2 hours aho", 4),
new reviews("path", "review3", "Review 1", "remove substitile", "19th", "2 hours aho", 4),
new reviews("path", "review4", "Review 1", "remove substitile", "19th", "2 hours aho", 4),
new reviews("path", "review5", "Review 1", "remove substitile", "19th", "2 hours aho", 4),

new analysis("path", "analysis1", "Review 1", "remove substitile", "19th", "2 hours aho", 4),
new analysis("path", "analysis2", "Review 1", "remove substitile", "19th", "2 hours aho", 4),
new analysis("path", "analysis3", "Review 1", "remove substitile", "19th", "2 hours aho", 4),
new analysis("path", "analysis4", "Review 1", "remove substitile", "19th", "2 hours aho", 4),
new analysis("path", "analysis5", "Review 1", "remove substitile", "19th", "2 hours aho", 4),



 ];

let masterArray = [];
masterArray.push(essayArray);
masterArray.push(analysisArray);
masterArray.push(reviewsArray);


console.log(masterArray);


let j = 5;
let i = 0;

window.onload = function(){
    while (i<3){
        while (j>0){
            document.getElementById(`title${i}${j}`).innerHTML = masterArray[i][j]._title;
            document.getElementById(`subtitle${i}${j}`).innerHTML = masterArray[i][j]._subtitle;
            document.getElementById(`metaInfo${i}${j}`).innerHTML = masterArray[i][j]._metaInfo;
            j--;
            console.log(j);
        }
        i++;
        j = 4;
        console.log(i);
    }
    document.getElementById('photoLink1').innerHTML = essayArray[i]._photoLink;
};


