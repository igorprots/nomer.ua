// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault()

//         const blockID = anchor.getAttribute('href').substr(1)
//         console.log(anchor);
//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)
        console.log(anchor);
        // document.getElementById().scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start'
        // })
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + blockID).offset().top
        }, 1000);
    })
}