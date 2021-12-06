const fs = require("fs").promises;
const fsTest = require("fs");

const path = './data.json';

const arguments = process.argv.slice(2);
let localArray = []

async function readFile(file) {
    localArray = await fs.readFile(file);
    await pushingFunction(file, JSON.parse(localArray));
}

const productObj = {
    "name": `${arguments[0]}`,
    "qty": `${arguments[1]}`,
}

const pushingFunction = (file, arr) => {
    arr.push(productObj);
    writeFile(file, arr)
}

async function writeFile(file, content) {
    await fs.writeFile(file, JSON.stringify(content));
    await renderFunction(content)
}

if (fsTest.existsSync(path)) {
    readFile(path);
} else {
    pushingFunction(path, localArray)
}


function renderFunction(content) {
 
    const list = content.map(element => {
        const liList = ` <li>${element.qty} - ${element.name}</li>`;
        return liList;
    });

    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista Spesa</title>
</head>
<body>
    <h1>Lista della Spesa</h1>
    <ul class="list">
    ${list.join('')}
    </ul>
</body>
</html>`;
    fs.writeFile('index.html', html);
}

