import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

const intro = document.querySelector<HTMLElement>("#brand-intro");
const revealTargets = gsap.utils.toArray<HTMLElement>(
  "main section:not(#inicio) [data-reveal]:not(.product-card):not(.slot-card):not(.testimonial-card):not(.gallery-item)",
);
const cardTargets = gsap.utils.toArray<HTMLElement>(".product-card, .slot-card, .testimonial-card");
const galleryTargets = gsap.utils.toArray<HTMLElement>(".gallery-item");
const listTargets = gsap.utils.toArray<HTMLElement>(".narrative-list article, .detail-list article, .accordion details");

const resetToIntro = () => {
  if (window.location.hash) {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  ScrollTrigger.update();
  requestAnimationFrame(() => document.documentElement.style.removeProperty("scroll-behavior"));
};

const prepareMotionStates = () => {
  gsap.set(".site-header", { autoAlpha: 0, y: -18, force3D: true });
  gsap.set(".hero-copy > *:not(h1)", { autoAlpha: 0, y: 38, force3D: true });
  gsap.set(".hero-copy h1 span", { autoAlpha: 0, y: 54, rotate: 1.5, force3D: true });
  gsap.set(".hero-scroll-cue", { autoAlpha: 0 });
  gsap.set(revealTargets, { autoAlpha: 0, y: 48, scale: 0.99, force3D: true });
  gsap.set(cardTargets, { autoAlpha: 0, y: 52, scale: 0.98, force3D: true });
  gsap.set(galleryTargets, { autoAlpha: 0, y: 48, scale: 0.985, force3D: true });
  gsap.set(listTargets, { autoAlpha: 0, x: -28, force3D: true });
};

const initIntro = () => {
  if (!intro) return;

  const introTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: () => `+=${Math.min(Math.max(window.innerHeight * 0.36, 280), 380)}`,
      scrub: 0.18,
      invalidateOnRefresh: true,
    },
  });

  introTimeline
    .to(".intro-scroll", { autoAlpha: 0, y: 18, duration: 0.14 }, 0)
    .to(".intro-ring-one", { scale: 1.28, autoAlpha: 0, duration: 0.34 }, 0)
    .to(".intro-ring-two", { scale: 1.5, autoAlpha: 0, duration: 0.38 }, 0)
    .to(".intro-logo-wrap img", { scale: 1.04, duration: 0.3 }, 0)
    .to(".intro-content", { yPercent: -14, scale: 0.97, autoAlpha: 0, duration: 0.24 }, 0)
    .to(".intro-aurora-one", { xPercent: 28, yPercent: -16, scale: 1.18, duration: 0.42 }, 0)
    .to(".intro-aurora-two", { xPercent: -25, yPercent: 20, scale: 1.16, duration: 0.42 }, 0)
    .to(intro, { yPercent: -100, autoAlpha: 0, duration: 0.48, ease: "power2.inOut" }, 0.02)
    .to(".site-header", { autoAlpha: 1, y: 0, duration: 0.16 }, 0.22)
    .to(".hero-copy h1 span", { autoAlpha: 1, y: 0, rotate: 0, stagger: 0.018, duration: 0.2 }, 0.14)
    .to(".hero-copy > *:not(h1)", { autoAlpha: 1, y: 0, stagger: 0.02, duration: 0.18 }, 0.2)
    .to(".hero-scroll-cue", { autoAlpha: 1, duration: 0.12 }, 0.38);
};

const initScrollMotion = () => {
  revealTargets.forEach((target) => {
    gsap.to(target, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.68,
      ease: "power3.out",
      clearProps: "opacity,visibility,transform",
      scrollTrigger: { trigger: target, start: "top 90%", once: true },
    });
  });

  ScrollTrigger.batch(".product-card, .slot-card, .testimonial-card", {
    start: "top 94%",
    once: true,
    onEnter: (cards) =>
      gsap.to(cards, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.62,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
      }),
  });

  ScrollTrigger.batch(".gallery-item", {
    start: "top 94%",
    once: true,
    onEnter: (items) =>
      gsap.to(items, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.78,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
      }),
  });

  ScrollTrigger.batch(".narrative-list article, .detail-list article, .accordion details", {
    start: "top 92%",
    once: true,
    onEnter: (items) =>
      gsap.to(items, {
        autoAlpha: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "opacity,visibility,transform",
      }),
  });

  gsap.to(".narrative-photo img", {
    yPercent: 8,
    scale: 1.06,
    ease: "none",
    scrollTrigger: {
      trigger: ".narrative",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.8,
    },
  });

  gsap.to(".hero-orb-one", {
    xPercent: 26,
    yPercent: 18,
    ease: "none",
    scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: 1 },
  });

  gsap.to(".hero-orb-two", {
    xPercent: -22,
    yPercent: -18,
    ease: "none",
    scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: 1 },
  });
};

resetToIntro();
window.addEventListener("pageshow", (event) => event.persisted && resetToIntro());
prepareMotionStates();
initIntro();
initScrollMotion();
document.documentElement.classList.remove("motion-preload");
