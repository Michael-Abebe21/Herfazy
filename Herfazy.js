const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')


const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

}

menu.addEventListener('click', mobileMenu);


// show active menu when scrolling 

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const serviceMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY 

// adds highlight class to my menu items 

if(window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight') 
    return
} else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    serviceMenu.classList.remove('highlight')
    return
} else if (window.innerWidth > 960 && scrollPos < 2345) {
    serviceMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return }

if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight') 
}

}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// close moblie menu when clicking on a menu item 

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

//form validation
var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateName(){
    var name = document.getElementById('contact-name').value; 

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false; 
        }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false; 
    }
    nameError.innerHTML = "<img src=\'Images/checkmark.png\' width=\'20px\' height=\'20px\'>"; 
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value; 

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is reqired'; 
        return false; 
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits'; 
        return false; 
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please'; 
        return false; 
    }
    phoneError.innerHTML = "<img src=\'Images/checkmark.png\' width=\'20px\' height=\'20px\'>"; 
    return true; 
}

function validateEmail(){
    var email = document.getElementById('contact-email').value; 


    if(email.length == 0){
        emailError.innerHTML = 'Email is reqired'; 
        return false; 
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'; 
        return false; 
    }
    emailError.innerHTML = "<img src=\'Images/checkmark.png\' width=\'20px\' height=\'20px\'>"; 
    return true; 
    
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30; 
    var left = required - message.length; 


    if(left>0){
        messageError.innerHTML = left + ' more characters required'; 
        return false; 
    }
    messageError.innerHTML = "<img src=\'Images/checkmark.png\' width=\'20px\' height=\'20px\'>"; 
    return true; 
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'; 
        submitError.innerHTML = 'Please fix error to submit'; 
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;  
    }
}
