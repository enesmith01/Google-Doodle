// GSAP included in `index.html`
console.log('OK');

gsap.from( '.letter', {
  duration: 2.5, ease: "back.out(1.7)", y: -500
});

gsap.from('.chara', {duration: 2.5, ease: "steps(6)", y: -500, x:200 });