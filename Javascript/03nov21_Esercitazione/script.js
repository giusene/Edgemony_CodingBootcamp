let elements = [];
const ulList = document.querySelector('ul');

const render = (dataSheet) => {
    elements = dataSheet.map((element) => {
        if (element.completed) {
            return `<li>
                <button type="button" onclick="eraseFunction()" class="delete">X</button>
                <input type="checkbox" checked>${element.title}
                </li>`;
        } else {
            return `<li>
                <button type="button" onclick="eraseFunction()"  class="delete">X</button>
                <input type="checkbox">${element.title}
                </li>`;
        }
    });
    const content = elements.join('');
    ulList.innerHTML = content;
}


document.addEventListener('DOMContentLoaded', () => {
    render(data);
})


const eraseFunction = () => {
    elements.pop();
    const content = elements.join('');
    ulList.innerHTML = content;
}