                    
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let content = document.querySelector('#content')
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.src = "byui-logo-white.png";
        document.body.style.backgroundColor = "#2e2e2e";
        content.style.color = "#d4cfc4";
        h1.style.color = "#f0ece0";
        h2.style.color = "#7aafc4";

    } else {
        logo.src = "byui-logo-blue.webp";
        document.body.style.backgroundColor = "white";
        h1.style.color = "#222222";
        h2.style.color = "#4a7fa5";
        content.style.color = "black";
    }
}     