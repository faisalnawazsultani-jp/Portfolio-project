 const contactForm = document.getElementById('contactForm');
const statusText = document.getElementById('formStatus');
const topBtn = document.getElementById('topBtn');
const whatsappLink = document.getElementById('whatsappLink');


// WhatsApp

const whatsappNumber = '923000000000';

const whatsappText = encodeURIComponent(
    'Hi Sajid, I visited your graphic design portfolio and would like to discuss a design project.'
);

whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;


// Contact Form

contactForm.addEventListener('submit', function(event){

    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();

    if(name == '' || email == '' || subject == '' || message == ''){

        statusText.style.color = '#ff6b6b';
        statusText.innerHTML = 'Please fill all fields.';

    }

    else{

        statusText.style.color = '#2ce6df';
        statusText.innerHTML = 'Message form submitted successfully!';

        contactForm.reset();

    }

});


// Back To Top Button

window.addEventListener('scroll', function(){

    if(window.scrollY > 500){

        topBtn.style.display = 'block';

    }

    else{

        topBtn.style.display = 'none';

    }

});


topBtn.addEventListener('click', function(){

    window.scrollTo({

        top:0,
        behavior:'smooth'

    });

});


// Close Mobile Navbar

document.querySelectorAll('.navbar .nav-link').forEach(function(link){

    link.addEventListener('click', function(){

        let menu = document.getElementById('menu');

        if(menu.classList.contains('show')){

            bootstrap.Collapse.getOrCreateInstance(menu).hide();

        }

    });

});


// Skills Animation

let skillColumns = document.querySelectorAll('#skills .row > div');

skillColumns.forEach(function(skill, index){

    if(index % 2 == 0){

        skill.classList.add('reveal-left');

    }

    else{

        skill.classList.add('reveal-right');

    }

    skill.classList.add('reveal-delay-' + (index + 1));

});


// Projects Animation

let projectColumns = document.querySelectorAll('#projects .row > div');

projectColumns.forEach(function(project, index){

    if(index % 2 == 0){

        project.classList.add('reveal-left');

    }

    else{

        project.classList.add('reveal-right');

    }

    project.classList.add('reveal-delay-' + (index + 1));

});


// Scroll Reveal Function

let revealElements = document.querySelectorAll(
    '.reveal-left, .reveal-right'
);

 function revealAnimation(){

    let screenHeight = window.innerHeight;

    revealElements.forEach(function(element){

        let elementTop = element.getBoundingClientRect().top;
        let elementBottom = element.getBoundingClientRect().bottom;

        if(elementTop < screenHeight - 80 && elementBottom > 80){

            element.classList.add('reveal-active');

        }

        else{

            element.classList.remove('reveal-active');

        }

    });

}


window.addEventListener('scroll', revealAnimation);

window.addEventListener('load', revealAnimation);

revealAnimation();