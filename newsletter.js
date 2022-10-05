document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
    setTimeout(function() {
      document.querySelector('.subscription').classList.remove('done');
          }, 3000);
  });