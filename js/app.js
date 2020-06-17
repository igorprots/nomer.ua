// Carousel

$(document).ready(function() {

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        margin: 10,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true

            },
            600: {
                items: 3,
                nav: false,
                dots: true
            },
            1000: {
                items: 3,
                nav: true,
            }
        }
    });
});

// Popup-form

PopUpHide();

function PopUpShow() {
    $("#popup1").show();
}

function PopUpHide() {
    $("#popup1").hide();
}

// Form
const forms = [...document.querySelectorAll('.form')];
forms.forEach(formElement => {
    formElement.addEventListener('submit', () => {
        const user_name = formElement.querySelector('input[name="user_name"]').value;
        const user_phone = formElement.querySelector('input[name="user_phone"]').value;
        const user_number = formElement.querySelector('input[name="user_number"]').value;
        const emailText = `
            <!DOCTYPE html> 
                <html>
                    <body>
                        <p>Заявка с сайта <br> test.protsenko</p>
                        <p style="font-size:32px;">Имя  <br> ${user_name }</p>
                        <p style="font-size:32px;">Номер телфона  <br>${ user_phone}</p>
                        <p style="font-size:32px;">Выбраные номера <br>${user_number}</p>
                    </body>
                </html>`;
        sendEmail(emailText);
    });
});


function sendEmail(emailtText) {
    const emailOptions = { "personalizations": [{ "to": [{ "email": "protsxe51@gmail.com" }] }], "from": { "email": "protsxe51@gmail.com" }, "subject": "Sending with SendGrid is Fun", "content": [{ "type": "text/html", "value": emailtText }] };

    fetch('https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`,
        },
        body: JSON.stringify(emailOptions)
    }).then(response => {
        $(".form")[0].reset();
        $(".success").css("display", "block");
        PopUpHide()
    });
}

// Navbar

$(document).ready(() => {
    $(".nav-link").on("click", function(e) {
        $("a.nav-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
    $('.nav-toggle').click(() => {
        $('.nav').toggleClass('active-toggle')
    })
})

//Scroll


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        console.log(anchor);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + blockID).offset().top
        }, 1000);
    })
}