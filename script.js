document.addEventListener("DOMContentLoaded", () => {
    const heroHeading = document.querySelectorAll("nav, h1");
})

function animateElements(){
    if (animationsInitialized) return;
    animationsInitialized = true
heroHeading.forEach((element) => {
    let originalText = element.textContent;
    let index = 0;

    const shuffleElement = setInterval(() => {
    if (index < originalText.length){
      let shuffledText = "";
      for (let i = 0; i <= index; i++) {
        shuffledText+=
        i < index ? originalText[i] : Math.random().toString(36)[2];
      }

      element.textContent =
      shuffledText + originalText.substring(index + 1);
      index++;
    } else{
        clearInterval(shuffleElement);
        element.textContent = originalText;
    }  
},100);
});
}




