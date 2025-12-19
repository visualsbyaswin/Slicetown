(function () {
  "use strict";

  // Configuration
  const CONFIG = {
    sliderId: "offersSlider",
    transitionDuration: 500,
    prevBtnClass: "nav-btn--prev",
    nextBtnClass: "nav-btn--next",
  };

  // Slider Class
  class InfiniteSlider {
    constructor(sliderId) {
      this.slider = document.getElementById(sliderId);
      if (!this.slider) {
        console.error(`Slider with id "${sliderId}" not found`);
        return;
      }

      this.slides = Array.from(this.slider.children);
      this.totalSlides = this.slides.length;
      this.currentSlide = 0;
      this.isTransitioning = false;

      this.prevBtn = document.querySelector(`.${CONFIG.prevBtnClass}`);
      this.nextBtn = document.querySelector(`.${CONFIG.nextBtnClass}`);

      this.init();
    }

    init() {
      if (this.totalSlides === 0) return;

      this.setupInfiniteLoop();
      this.attachEventListeners();
      this.setupAccessibility();
    }

    setupInfiniteLoop() {
      // Clone first and last slides for seamless infinite loop
      const firstClone = this.slides[0].cloneNode(true);
      const lastClone = this.slides[this.totalSlides - 1].cloneNode(true);

      this.slider.appendChild(firstClone);
      this.slider.insertBefore(lastClone, this.slides[0]);

      // Start at first real slide
      this.currentSlide = 1;
      this.updateSliderPosition(false);
    }

    updateSliderPosition(smooth = true) {
      if (smooth) {
        this.slider.style.transition = `transform ${CONFIG.transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      } else {
        this.slider.style.transition = "none";
      }

      // Use translate3d for better performance
      this.slider.style.transform = `translate3d(-${
        this.currentSlide * 100
      }%, 0, 0)`;
    }

    next() {
      if (this.isTransitioning) return;

      this.isTransitioning = true;
      this.currentSlide++;
      this.updateSliderPosition(true);

      // Reset to first real slide after animation
      if (this.currentSlide === this.totalSlides + 1) {
        setTimeout(() => {
          this.currentSlide = 1;
          this.updateSliderPosition(false);
          this.isTransitioning = false;
        }, CONFIG.transitionDuration);
      } else {
        setTimeout(() => {
          this.isTransitioning = false;
        }, CONFIG.transitionDuration);
      }
    }

    prev() {
      if (this.isTransitioning) return;

      this.isTransitioning = true;
      this.currentSlide--;
      this.updateSliderPosition(true);

      // Reset to last real slide after animation
      if (this.currentSlide === 0) {
        setTimeout(() => {
          this.currentSlide = this.totalSlides;
          this.updateSliderPosition(false);
          this.isTransitioning = false;
        }, CONFIG.transitionDuration);
      } else {
        setTimeout(() => {
          this.isTransitioning = false;
        }, CONFIG.transitionDuration);
      }
    }

    attachEventListeners() {
      if (this.prevBtn) {
        this.prevBtn.addEventListener("click", () => this.prev());
      }

      if (this.nextBtn) {
        this.nextBtn.addEventListener("click", () => this.next());
      }

      // Keyboard navigation
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") this.prev();
        if (e.key === "ArrowRight") this.next();
      });

      // Touch support for mobile
      this.setupTouchEvents();
    }

    setupTouchEvents() {
      let touchStartX = 0;
      let touchEndX = 0;

      this.slider.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true }
      );

      this.slider.addEventListener(
        "touchend",
        (e) => {
          touchEndX = e.changedTouches[0].screenX;
          this.handleSwipe(touchStartX, touchEndX);
        },
        { passive: true }
      );
    }

    handleSwipe(startX, endX) {
      const minSwipeDistance = 50;
      const diff = startX - endX;

      if (Math.abs(diff) > minSwipeDistance) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }

    setupAccessibility() {
      this.slider.setAttribute("role", "region");
      this.slider.setAttribute("aria-label", "Hot deals carousel");

      this.slides.forEach((slide, index) => {
        slide.setAttribute(
          "aria-label",
          `Slide ${index + 1} of ${this.totalSlides}`
        );
      });
    }

    destroy() {
      // Cleanup method for when slider is removed
      if (this.prevBtn) {
        this.prevBtn.removeEventListener("click", this.prev);
      }
      if (this.nextBtn) {
        this.nextBtn.removeEventListener("click", this.next);
      }
    }
  }

  // Initialize slider when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new InfiniteSlider(CONFIG.sliderId);
    });
  } else {
    new InfiniteSlider(CONFIG.sliderId);
  }
})();


















//marquee slider

const images = [
  "images/pi1.avif",
  "images/pi2.avif",
  "images/pi3.avif",
  "images/pi4.avif",
  "images/pi5.avif",
  "images/pi6.avif",

];


function createphotocards(src){
    const card=document.createElement("div")
    card.className="photo-card ";


          const img=document.createElement("img")
          img.src=src;
          img.alt="marquee loading"
          card.appendChild(img)

          return card

}

function initialslider(){
    const track=document.getElementById("sliderTrack");
    for(let i=0;i<images.length*2;i++){
        const src=images[i%images.length];
        track.appendChild(createphotocards(src))
    }
}
initialslider()