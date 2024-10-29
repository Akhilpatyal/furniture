const menuBtn=document.getElementById("menu-btn")
const navLinks=document.getElementById("nav-links")
const menuBtnIcon=menuBtn.querySelector("i")

menuBtn.addEventListener("click",(e)=>{
navLinks.classList.toggle("open");

const isopen=navLinks.classList.contains("open")
menuBtnIcon.setAttribute("class",isopen ? "ri-close-line" : "ri-menu-2-line");
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
menuBtnIcon.setAttribute("class","ri-menu-2-line");
})

var tl = gsap.timeline();

// // GSAP Animation
tl.from(".header_container h1", {
    y: -50,
    opacity: 0,
    duration: 3.2,
    delay: 0.5,
    ease: "power3.out",
});


tl.from(".choose_container .choose_content", {
    x: -100,
    opacity: 0,
    duration: 4,
    delay: 1.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".choose_container", //parent
        // scroller: "body",
        start:"top 50%",
        end:"top 10%",
        // markers:true,
        scrub: 2,
        // pin: true,
    }
})
tl.from(".choose_container .choose_content .choose_card", {
    x: -100,
    opacity: 0,
    duration: 4,
    delay: 1.5,
    ease: "back.out(1.7)",
    stagger:0.3,
    scrollTrigger: {
        trigger: ".choose_container", //parent
        // scroller: "body",
        start:"top 50%",
        end:"top 10%",
        // markers:true,
        scrub: 2,
        // pin: true,
    }
})


tl.from(".offer_container .offer_grid_top", {
    // x: -20,
    y: -250,
    opacity: 0,
    duration: 2.5,
    delay: 0.1,
    // ease: "power3.out",
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".offer_container", //parent
        // scroller: "body",
        start:"top 50%",
        end:"top 10%",
        // markers:true,
        scrub: 2,
        // pin: true,
    }
})
tl.from(".offer_container .offer_grid_bottom img", {
    // x: -20,
    x: -250,
    opacity: 0,
    duration: 4.5,
    delay: 0.5,
    // ease: "power3.out",
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".offer_container", //parent
        // scroller: "body",
        start:"top 50%",
        end:"top 10%",
        // markers:true,
        scrub: 2,
        // pin: true,
    }
})
tl.from(".craft_content", {
    y: -100,
    opacity: 0,
    duration: 4,
    delay: 0.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".craft_container", //parent
        // scroller: "body",
        start:"top 50%",
        end:"top 10%",
        // markers:true,
        scrub: 2,
        // pin: true,
    }
})
// tl.from(".modern_content", {
//     x: 100,
//     opacity: 0,
//     duration: 4,
//     delay: 0.5,
//     ease: "back.out(1.7)",
//     scrollTrigger: {
//         trigger: ".modern_container", //parent
//         // scroller: "body",
//         start:"top 50%",
//         end:"top 10%",
//         // markers:true,
//         scrub: 2,
//         // pin: true,
//     }
// })


tl.from(".blog_card", {
    y:-30,
    opacity:0,
    duration:1,
    delay:1.5,
    stagger:0.3,
    ease: "back.out(1.7)",

    scrollTrigger: {
        trigger: ".blog_container", //parent
        // scroller: "body",
        start:"top 50%",
        end:"top 10%",
        // markers:true,
        scrub: 2,
        // pin: true,
    }
})



