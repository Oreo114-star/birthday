$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
  
});











const elts = {  
  text1: document.getElementById("text1"),  
  text2: document.getElementById("text2")
};  
 const texts = [  
 "💖A great lovely greeting to hamster💖",  
 "Hello My Wife 👰🏻",  
 "Wishes you a very lovely birthday 🎂",  
 " all wishes to come to true",  

 "I love you alot ayushi💝💓💓",
 "Your (HIMANSHU)! Again wishes you a very blessed n happiest day of my ",
   "😘😘😘",
  "♥💝💓❤❣🤍🤎💝💓💓",
  "🤗🤗🤗",
    "💞 I LOVE YOU "

 ];  
 const morphTime = 1;  
 const cooldownTime = 1.60;  
 let textIndex = texts.length - 1;  
 let time = new Date();  
 let morph = 0;  
 let cooldown = cooldownTime;  
 elts.text1.textContent = texts[textIndex % texts.length];  
 elts.text2.textContent = texts[(textIndex + 1) % texts.length];  
 function doMorph() {  
  morph -= cooldown;  
  cooldown = 0;  
  let fraction = morph / morphTime;  
  if (fraction > 1) {  
   cooldown = cooldownTime;  
   fraction = 1;  
  }  
  setMorph(fraction);  
 }  
 function setMorph(fraction) {  
  // fraction = Math.cos(fraction * Math.PI) / -2 + .5;  
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;  
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;  
  fraction = 1 - fraction;  
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;  
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;  
  elts.text1.textContent = texts[textIndex % texts.length];  
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];  
 }  
 function doCooldown() {  
  morph = 0;  
  elts.text2.style.filter = "";  
  elts.text2.style.opacity = "100%";  
  elts.text1.style.filter = "";  
  elts.text1.style.opacity = "0%";  
 }  
 function animate() {  
  requestAnimationFrame(animate);  
  let newTime = new Date();  
  let shouldIncrementIndex = cooldown > 0;  
  let dt = (newTime - time) / 1000;  
  time = newTime;  
  cooldown -= dt;  
  if (cooldown <= 0) {  
   if (shouldIncrementIndex) {  
    textIndex++;  
   }  
   doMorph();  
  } else {  
   doCooldown();  
  }  
 }  
 animate();