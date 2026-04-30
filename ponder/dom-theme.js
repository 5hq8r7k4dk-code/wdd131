
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let logo = document.getElementById("logo");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url(images/forevernow.jpg)";
        pageContent.style.fontFamily = "Papyrus, fantasy";
        logo.style.opacity = "100%";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url(images/somethingeverything.jpg)";
        pageContent.style.fontFamily = "Impact, sans-serif";
        logo.style.opacity = "100%";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url(images/endlessdawn.jpg)";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        logo.style.opacity = "100%";
    } else {
        // default
        document.body.style.backgroundImage = "url(images/circleintime.jpg)";
        pageContent.style.fontFamily = "Georgia, serif";
        logo.style.opacity = "0%";
    }
}
          