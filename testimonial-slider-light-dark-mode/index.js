const inputEl = document.querySelector('.input');
const testimonialEl = document.querySelector('.testimonial-container');
const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernmaeEl = document.querySelector('.username');

inputEl.checked = JSON.parse(localStorage.getItem('mode'));
inputEl.addEventListener('input', () => {
  updateBody();
  localStorageSave();
});
updateBody();
function updateBody() {
  const bodyEl = document.querySelector('body');
  if (inputEl.checked === true) {
    bodyEl.style.background = 'black';
    testimonialEl.style.background = 'white';
    textEl.style.color = 'black';
    usernmaeEl.style.color = 'black';
  } else {
    bodyEl.style.background = 'white';
    testimonialEl.style.background = 'black';
    textEl.style.color = 'white';
    usernmaeEl.style.color = 'white';
  }
  localStorageSave();
}

function localStorageSave() {
  localStorage.setItem('mode', JSON.stringify(inputEl.checked));
}


const testimonials = [
  {
    name: "Jessica L.",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple products have transformed the way I connect and create, making my daily tasks seamless andenjoyable.The intuitive design and robust ecosystem keep me organized and inspired, whether I'm at work or play!"
  },
  {
    name: "Emily R.",
    photoUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple has redefined my tech experience with its sleek design and user-friendly interface. I love how all my devices sync perfectly, making my life so much easier!"
  },
  {
    name: "David K.",
    photoUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple products have consistently impressed me with their reliability and innovative features. The seamless integration across devices makes my daily tasks not just easier, but also more enjoyable!"
  },
  {
    name: "Mark T.",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Using Apple products has completely streamlined my life; everything just works together so effortlessly. The quality and innovation they bring to the table make every experience enjoyable and efficient!"
  },

];

let idx = 0;
updateTestimonial();
function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernmaeEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}

