let btn = document.getElementById("modal");
let header = document.getElementsByTagName("header")[0];
let nav = document.getElementById("nav");

btn.addEventListener('click', () => {
    nav.classList.toggle("nav-modal")
    if (nav.style.display == 'none' || nav.style.display == false) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
})

// script for select --

const btnArrowSelect = document.getElementById("button-select");
const selectDivOfForm = document.getElementsByClassName("select")[0];
const inputOfSelect = selectDivOfForm.getElementsByTagName('input')[0];


// code for arrow's moves and create event for modal

let isRotated = false;
let openEvent = new CustomEvent("open");
let closeEvent = new CustomEvent("close");

// script for choose and call events
inputOfSelect.addEventListener("click", (e) => {

    if (!isRotated){
        inputOfSelect.dispatchEvent(openEvent);
    } else {
        inputOfSelect.dispatchEvent(closeEvent);
    }

})


// code for close modal

const modalSelectBlock = document.getElementById('modalSelect')

inputOfSelect.addEventListener('close', (e) => {
    btnArrowSelect.style.transform = "rotate(0deg)";
    isRotated = false;

    modalSelectBlock.classList.toggle('modal-option');
    modalSelectBlock.style.display = 'none';

})

// code for open modal

inputOfSelect.addEventListener('open', (e) => {
    btnArrowSelect.style.transform = "rotate(-90deg)";
    isRotated = true;

    modalSelectBlock.classList.toggle('modal-option');
    modalSelectBlock.style.display = 'flex';
    modalSelectBlock.style.opacity = `${100}%`;
    
})

// script for option

let optionsModal = modalSelectBlock.getElementsByTagName('div');

optionsModal[0].addEventListener('click', (e) => {
    inputOfSelect.value = optionsModal[0].textContent;
    inputOfSelect.dispatchEvent(closeEvent);
})

optionsModal[1].addEventListener('click', (e) => {
    inputOfSelect.value = optionsModal[1].textContent;
    inputOfSelect.dispatchEvent(closeEvent)
})



// script for form --


const buttonForm = document.getElementById("button-form");
const form = document.form;

let firstname = form.name;
let email = form.email;
let select = document.getElementById('test');
let text = form.text;

// script to check a valid in all inputs and send this data to server

function sendForm(e) {

    const objELements = {
        name: "имя",
        email: "почту",
        select: "сервис",
        text: "сообщение",
    };

    for (elem of form){

        const div = document.getElementsByClassName('error-form')[0];
        const p = div.getElementsByTagName("p")[0];
        let val = elem.getAttribute('name');

        if (elem.value == "" && elem.nodeName != "BUTTON"){

            p.textContent = `Внимание! Введите ${objELements[val]}`;
            div.appendChild(p);
            e.preventDefault();

            break;

        }

        p.textContent = '';
          
    }

    let json = {
        username: firstname.value,
        email: email.value,
        service: select.value,
        message: text.value,
    };

    console.log(json)
}


buttonForm.addEventListener("click", sendForm);

// (async () => {
//     let response = await fetch("https://api.telegram.org/bot7364676072:AAHdqDF-RUxoO1VHQqKWq0VxTq8ZfKKGVNk/getMe", {
//         method: "POST",
//         body: JSON.stringify({
//             name: "user",
//             age: 10
//         }),
        
//     });
//     let res = await response.json()

//     console.log(res)
// })()