$(document).ready(function() {
    const path = document.querySelector('#Opaque_Ring');
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    $(window).on('scroll', function() {
      const scrollTop = $(window).scrollTop();
      const docHeight = $(document).height();
      const winHeight = $(window).height();
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const drawLength = pathLength * scrollPercent;

      gsap.to(path, {
        strokeDashoffset: pathLength - drawLength,
        duration: 0.1,
        ease: 'none'
      });
    });
  });

  function setInitialTitle() {
    const initialPage = document.querySelector('.page');
    document.getElementById('page-title').textContent = initialPage.querySelector('.small-title').textContent;
  }
  
  function initScrollEffects() {
    gsap.registerPlugin(ScrollTrigger);
  
    const pages = document.querySelectorAll('.page');
    const progressBar = document.querySelector("#Opaque_Ring");
    const totalPages = pages.length;
    const pathLength = progressBar.getTotalLength();
  
    gsap.set(progressBar, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
  
    ScrollTrigger.create({
      trigger: "#content-container",
      start: "top top",
      end: "bottom bottom",
      onUpdate: self => {
        const progress = self.progress;
        const drawLength = pathLength * progress;
        gsap.to(progressBar, { strokeDashoffset: pathLength - drawLength, duration: 0.1, ease: "none" });
      }
    });
  
    pages.forEach((page, index) => {
      ScrollTrigger.create({
        trigger: page,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateTitle(page),
        onLeaveBack: () => updateTitle(page)
      });
    });
  }
  
  function updateTitle(page) {
    const newTitle = page.querySelector('.small-title').textContent;
    gsap.to("#page-title", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.getElementById('page-title').textContent = newTitle;
        gsap.to("#page-title", { opacity: 1, duration: 0.5 });
      }
    });
  }