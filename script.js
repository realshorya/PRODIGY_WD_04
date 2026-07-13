const words = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function type() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typing.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1200); // Pause after typing
      return;
    }
  } else {
    typing.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 1) { // Keep one character, don't go blank
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? 70 : 120);
}

type();