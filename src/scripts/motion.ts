import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const intro = document.querySelector<HTMLElement>("#brand-intro");

const resetToIntro = () => {
  if (window.location.hash) {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  ScrollTrigger.update();
  requestAnimationFrame(() => document.documentElement.style.removeProperty("scroll-behavior"));
};

const initIntro = () => {
  if (!intro) return;

  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .fromTo(".intro-logo-wrap", { autoAlpha: 0, scale: 0.78, filter: "blur(12px)" }, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.9 })
    .fromTo(".intro-name, .intro-tagline", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.1 }, "-=0.38")
    .fromTo(".intro-scroll", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.18");

  gsap.set(".site-header", { autoAlpha: 0, y: -18 });
  gsap.set(".hero-copy > *:not(h1)", { autoAlpha: 1, y: 38 });
  gsap.set(".hero-copy h1 span", { autoAlpha: 1, y: 54, rotate: 1.5 });
  gsap.set(".hero-scroll-cue", { autoAlpha: 0 });

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
    .to(".intro-logo-wrap img", { scale: 1.04, filter: "blur(2px)", duration: 0.3 }, 0)
    .to(".intro-content", { yPercent: -14, scale: 0.97, autoAlpha: 0, duration: 0.24 }, 0)
    .to(".intro-aurora-one", { xPercent: 28, yPercent: -16, scale: 1.18, duration: 0.42 }, 0)
    .to(".intro-aurora-two", { xPercent: -25, yPercent: 20, scale: 1.16, duration: 0.42 }, 0)
    .to(intro, { yPercent: -100, autoAlpha: 0, duration: 0.48, ease: "power2.inOut" }, 0.02)
    .to(".site-header", { autoAlpha: 1, y: 0, duration: 0.16 }, 0.22)
    .to(".hero-copy h1 span", { y: 0, rotate: 0, stagger: 0.018, duration: 0.2 }, 0.14)
    .to(".hero-copy > *:not(h1)", { y: 0, stagger: 0.02, duration: 0.18 }, 0.2)
    .to(".hero-scroll-cue", { autoAlpha: 1, duration: 0.12 }, 0.38);
};

const initScrollMotion = () => {
  gsap.utils
    .toArray<HTMLElement>(
      "main section:not(#inicio) [data-reveal]:not(.product-card):not(.slot-card):not(.testimonial-card):not(.gallery-item)",
    )
    .forEach((target) => {
      gsap.fromTo(
        target,
        { autoAlpha: 0, y: 48, scale: 0.99 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.68,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: { trigger: target, start: "top 90%", once: true },
        },
      );
    });

  ScrollTrigger.batch(".product-card, .slot-card, .testimonial-card", {
    start: "top 94%",
    once: true,
    onEnter: (cards) =>
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 52, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.62,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
        },
      ),
  });

  ScrollTrigger.batch(".gallery-item", {
    start: "top 94%",
    once: true,
    onEnter: (items) =>
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 48, clipPath: "inset(12% 0 0 0 round 1rem)" },
        {
          autoAlpha: 1,
          y: 0,
          clipPath: "inset(0% 0 0 0 round 1rem)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform,clipPath",
        },
      ),
  });

  ScrollTrigger.batch(".narrative-list article, .detail-list article, .accordion details", {
    start: "top 92%",
    once: true,
    onEnter: (items) =>
      gsap.fromTo(
        items,
        { autoAlpha: 0, x: -28 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "opacity,visibility,transform",
        },
      ),
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

document.documentElement.classList.add("motion-enabled");
history.scrollRestoration = "manual";
resetToIntro();
window.addEventListener("pageshow", resetToIntro);
window.addEventListener("load", resetToIntro, { once: true });
requestAnimationFrame(() => requestAnimationFrame(resetToIntro));
window.setTimeout(resetToIntro, 120);
initIntro();
initScrollMotion();
