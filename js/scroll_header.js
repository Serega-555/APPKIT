// кнопки
const header__scrollButton1 = document.getElementById("header__scrollButton1");
const header__scrollButton2 = document.getElementById("header__scrollButton2");
const header__scrollButton3 = document.getElementById("header__scrollButton3");
// главный текст
const header__MainText = document.getElementById("header__MainText");
// второстепенный текст
const header__text = document.getElementById("header__text");
const container__leftButton = document.getElementById("container__leftButton");
const header__image = document.getElementById("header__image");


function changeContent1() {
    header__MainText.innerHTML = "AppKit is the perfect front-end\n" +
        "template for app developers";
    header__text.innerHTML = "It helps developers to build beautiful and user-friendly web apps quickly and easily!";
    container__leftButton.innerHTML = "Get started";
    container__leftButton.style.width = "153px"
    header__image.style.backgroundImage = `url(${"../images/hero-1.jpg"})`;
    // header__image.style.transitionDuration = ".7s"
    header__scrollButton1.style.backgroundColor = "#40babd";
    header__scrollButton2.style.backgroundColor = "#ffffff66";
    header__scrollButton3.style.backgroundColor = "#ffffff66";
}

function changeContent2() {
    header__MainText.innerHTML = "Angular Lover?";
    header__text.innerHTML = "AppKit also comes with an Angular JS version. It empowers developers to create UI components with very little code. Feeding data into AppKit directives is quick and easy.";
    container__leftButton.innerHTML = "Find out more";
    container__leftButton.style.width = "174px"
    header__image.style.backgroundImage = `url(${"../images/hero-2.jpg"})`;
    // header__image.style.transitionDuration = ".7s"
    header__scrollButton1.style.backgroundColor = "#ffffff66";
    header__scrollButton2.style.backgroundColor = "#40babd";
    header__scrollButton3.style.backgroundColor = "#ffffff66";
}

function changeContent3() {
    header__MainText.innerHTML = "Ready to build outstanding apps?";
    header__text.innerHTML = "Get AppKit today and it will supercharge your development. It's a must-have for any developers who are serious about building great products!";
    container__leftButton.innerHTML = "Try it now";
    container__leftButton.style.width = "142px"
    header__image.style.backgroundImage = `url(${"../images/hero-3.jpg"})`;
    // header__image.style.transitionDuration = ".7s"
    header__scrollButton1.style.backgroundColor = "#ffffff66";
    header__scrollButton2.style.backgroundColor = "#ffffff66";
    header__scrollButton3.style.backgroundColor = "#40babd";
}

header__scrollButton1.addEventListener("click", changeContent1);
header__scrollButton2.addEventListener("click", changeContent2);
header__scrollButton3.addEventListener("click", changeContent3);

document.addEventListener("DOMContentLoaded", changeContent1);

