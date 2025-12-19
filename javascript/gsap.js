        gsap.registerPlugin(ScrollTrigger);

        // Slide from left animations
        gsap.utils.toArray('.slide-in-left').forEach((el) => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'top 50%',
                     toggleActions: 'play none none none'
                }
            });
        });

        // Slide from right animations
        gsap.utils.toArray('.slide-in-right').forEach((el) => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'top 50%',
               toggleActions: 'play none none none'
                }
            });
        });

        // Fade in animations
        gsap.utils.toArray('.fade-in').forEach((el) => {
            gsap.to(el, {
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    stagger:1,
                    start: 'top 80%',
                       toggleActions: 'play none none none'
                }
            });
        });

        // Grid items stagger animation
        gsap.utils.toArray('.grid-item').forEach((el, i) => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
         
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });

gsap.utils.toArray(".stagger-item").forEach((element, index) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      ease: "power2.out",
    }
  );
});


 


gsap.to(".scroll-animator", {
  x: "45%",
  y: "45%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".page1",
    start: "top top",
    end: "bottom top",
    scrub: 1.5,

  }
});

    // set initial positions if needed

    // animate .an1 image to x: 0 when page2 reaches top + 20px
    gsap.to(".an1 ", {
      x: "0%",y:"0%",
      ease: "none",
     scrollBehavior:"smooth",
      scrollTrigger: {
        trigger: ".page2",
        start: "top 50%",   // when .page2 top is 20px below viewport top
        end: "bottom top", 
 
                // until .page2 bottom hits viewport top
        // set to true while debugging
      }
    });

    // animate .an2 image to x: 0 with a slightly different start (example)
    gsap.to(".an2 ", {
      x: "0%",
      y:"0%",
   
      ease: "none",
      scrollTrigger: {
        trigger: ".page2",
        start: "top 50%",   // same start as an1; adjust if you want offset
        end: "bottom top",
         
      }
    });


gsap.from(".headingtext", {
  y: 80,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".heading",
    start: "top 80%"
  }
});


gsap.from(".pm img", {
  scale: 1.4,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".pm img",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

