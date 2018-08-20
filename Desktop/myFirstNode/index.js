// const myModule = require('./module');

// console.log(myModule.msg);

// const myModule = require('./module');

// myModule('hello node');

// const fs = require('fs');

// fs.writeFile('./text.txt', 'hello world', (err) =>{
//     if (err) {
//         console.log(err);
//     }
//     fs.readFile('./text.txt', (err, data) => {
//         console.log(data.toString());
//     }) 
// });

// fs.writeFileSync('./text.txt', 'hello world');
// const data = fs.readFileSync('./text.txt');
// console.log(data.toString());

const fs = require('fs');
const path = require('path');
const resizeImg = require('resize-img');

const origDir = path.join(__dirname, 'images/orig/')
const distDir = path.join(__dirname, 'images/dist/')

if(!fs.existsSync(distDir)){
    fs.mkdirSync(distDir);
}

const fileName = 'pic1.jpeg';

resizeImg(fs.readFileSync(origDir + fileName), {width: 200, height: 200})
.then(buf => {
    fs.writeFileSync('./images/dist/pic1.jpeg', buf);
});

//1. resize image on the original image dimension NOTE: Package "image-size"
//2. resize all images in the orig folder at once NOTE: Use array forEach or for loop