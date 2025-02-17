let btn = document.getElementById("modal");
let header = document.getElementsByTagName("header")[0];
let nav = document.getElementById("nav");
// const toggleNav = (e) => {
//     console.count();
//     nav.classList.toggle('navigation')
//     nav.style.display = "flex";
// }
// btn.addEventListener("click", toggleNav)



// script for select --

const btnArrowSelect = document.getElementById("button-select");
const selectDivOfForm = document.getElementsByClassName("select")[0];
const inputOfSelect = selectDivOfForm.getElementsByTagName('input')[0];


// code for arrow's moves and create event for modal

let isRotated = false;
let openEvent = new CustomEvent("open");
let closeEvent = new CustomEvent("close");
inputOfSelect.addEventListener("click", (e) => {
    // script for call events
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
    console.log("Start close event");

    modalSelectBlock.classList.toggle('modal-option');
    modalSelectBlock.style.display = 'none';

})

// code for open modal

inputOfSelect.addEventListener('open', (e) => {
    console.log("Start open event");
    btnArrowSelect.style.transform = "rotate(-90deg)";
    isRotated = true;

    modalSelectBlock.classList.toggle('modal-option');
    modalSelectBlock.style.display = 'flex';

})

// script for option

let optionsModal = modalSelectBlock.getElementsByTagName('div');

optionsModal[0].addEventListener('click', (e) => {
    inputOfSelect.value = optionsModal[0].textContent;
    inputOfSelect.dispatchEvent(closeEvent)
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

function sendForm(e) {
    const objELements = {
        name: "имя",
        email: "почту",
        select: "сервис",
        text: "сообщение",
    };

    for (elem of form){
        if (elem.value == ""){
            const div = document.createElement('div');
            const p = document.createElement("p");
            let val = elem.getAttribute('name');
            p.textContent = `Внимание! Введите ${objELements[val]}`;
            div.appendChild(p);
            div.classList.add("error-form")
            form.appendChild(div);
            e.preventDefault();
            break;
        }    
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