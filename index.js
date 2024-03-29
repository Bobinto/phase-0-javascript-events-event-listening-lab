function addingEventListener() {
    const inputs = document.querySelectorAll('.button');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    inputs.forEach(input => {
      input.addEventListener('click', clickAlert);
    });
  }
  