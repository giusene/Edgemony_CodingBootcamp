const sendBtn = document.querySelector('#send')

sendBtn.addEventListener('click', () => {
    formName = document.querySelector('#name').value;
    surname = document.querySelector('#surname').value;
    job = document.querySelector('#job').value;
    html = document.querySelector('#html').value;
    css = document.querySelector('#css').value;
    javascript = document.querySelector('#javascript').value;
    about = document.querySelector('#about').value;
    if (formName.replaceAll(" ", "") === "" || surname.replaceAll(" ", "") === "" || job.replaceAll(" ", "") === "" || about.replaceAll(" ", "") === "") {
        alert('completa tutti i campi')
    } else {
        document.querySelector('body').classList.remove("noScroll");
        document.querySelector('.introPopUp').classList.add("hide");
        curriculumMaker(formName, surname, job, html, css, javascript, about)
    }
})

const curriculumMaker = (...par) => {
    let formContet = [...par];
    document.querySelector('h1').textContent = formContet[0] + ' ' + formContet[1];
    document.querySelector('h2').textContent = formContet[2];
    document.querySelector('.dinamicAbout').textContent = formContet[6];
    setTimeout( () => {
        document.querySelector('#htmlBar').classList.add(`skill${formContet[3]}`);
        document.querySelector('#cssBar').classList.add(`skill${formContet[4]}`);
        document.querySelector('#javascriptBar').classList.add(`skill${formContet[5]}`);
    }, 1500)
    const pulseTimer = setInterval(pulse, 1200);
    const removePopUp = setTimeout(disablePopUp, 1000);
    document.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            clearInterval(pulseTimer);
        }
    })
}

const nightModeBtn = document.querySelector('.nightModeBtn');

nightModeBtn.addEventListener('click', () => {
    let header = document.querySelector('header');
    let section = document.querySelector('section');
    let footer = document.querySelector('footer');
    header.classList.toggle("nightMode"); 
    section.classList.toggle("nightMode"); 
    footer.classList.toggle("nightMode");
    if (document.querySelector('.nightText').textContent === 'ENABLED') {
        document.querySelector('.nightText').textContent = 'DISABLED';
    } else document.querySelector('.nightText').textContent = 'ENABLED';
})

const pulse = () => {
    let sun = document.querySelector('.sun');
    let moon = document.querySelector('.moon');
    sun.classList.toggle("pulse");
    moon.classList.toggle("pulse");
}

const disablePopUp = () => {
    let popUp = document.querySelector('.introPopUp');
    popUp.classList.add("displayNone");
}

let formName, surname, job, html, css, javascript, about
