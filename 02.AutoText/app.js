const typedTextSpan = document.querySelector(".typed-text");
      const cursor = document.querySelector(".coursor");

      const word = ["Awesome", "Fun", "Cool", "Life", "Famous","Weired","😎"];
      const typingDelay = 200;
      const erasingDelay = 200;
      const newLetterDelayDelay = 2000;
      let index = 0;
      let charIndex = 0;
      document.addEventListener("DOMContentLoaded", () => {
        if (word.length) {
          setTimeout(type, newLetterDelayDelay);
        }
      });
      function type() {
        if (charIndex < word[index].length) {
          typedTextSpan.textContent += word[index].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
        } else {
          setTimeout(erase, newLetterDelayDelay);
        }
      }

      function erase() {
        if (charIndex > 0) {
          typedTextSpan.textContent = word[index].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, erasingDelay);
        } else {
          index++;
          if (index >= word.length) {
            index = 0;
          }
          setTimeout(type, typingDelay + 1100);
        }
      }