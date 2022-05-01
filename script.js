'use strict';

const form = document.querySelector('.inputcontainer');

function handleForm(event) {
  event.preventDefault();
  setTimeout('form.submit()', 3000);
}

form.addEventListener('submit', handleForm);
