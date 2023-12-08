console.log("I am working");
document.addEventListener('DOMContentLoaded', function () {

    new Splide('#project-splide', {

        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
            speed: 2,
        },
        // type: 'loop',
        // perPage: 3,
        // focus: 'center',
        // autoplay: true,
        // interval: 500,
        // // flickMaxPages: 3,
        // updateOnMove: true,
        // pagination: false,
        // drag: "free",
        // throttle: 1000,
        // autoScroll: {
        //   speed: 1,
        // },
        // breakpoints: {
        //   1440: {
        //     perPage: 1,
        //     padding: '30%'
        //   }
        // }
    }).mount(window.splide.Extensions);
    
    new Splide('#blogs-splide', {
        direction: 'ttb',
        height: '25rem',
        wheel: true,
        focus: "center",
        type: "loop",
        drag: "free",
        autoScroll: {
            speed: 10,
        },
        interval: 2500,
        autoplay: true,
        updateOnMove: true,
        perPage: 1,
        // custimize arrow prev and arrow next
        classes: {
            prev: 'splide__arrow--prev arrow-blogs-prev',
            next: 'splide__arrow--next arrow-blogs-next',
            pagination: 'splide__pagination pagination-blogs',

        }


    }).mount();
});
