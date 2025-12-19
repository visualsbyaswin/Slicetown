function navclickanimator() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
}
navclickanimator();


function popupgenerater(){
  const orderbtn=document.querySelector(".ordernow");
const popup=document.querySelector(".popup-message")

orderbtn.addEventListener("click",(e)=>{
  e.stopPropagation()
  popup.classList.toggle("shows")
});

document.addEventListener("click",(e)=>{
  if(!popup.contains(e.target)&&!orderbtn.contains(e.target)){
    popup.classList.remove("shows")
  }
})

}
popupgenerater()




const menuBtn = document.querySelector(".menu-btn-opn");
const overlay = document.querySelector(".menu-overlay");
const body = document.body;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  overlay.classList.toggle("show");
  body.classList.toggle("menu-open");
});

// close on link click
document.querySelectorAll(".overlaybuttons a").forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    overlay.classList.remove("show");
    body.classList.remove("menu-open");
  });
});
