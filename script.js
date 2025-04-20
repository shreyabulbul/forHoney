function showNote() {
    document.getElementById('hidden-note').style.display = 'block';
  }
  function checkPassword() {
    const entered = document.getElementById('password').value;
    const correct = "chummu123"; // you can change it!

    if (entered === correct) {
      window.location.href = "album-content.html";
    } else {
      document.getElementById('error').innerText = "Nope 😛 Try again!";
    }
  }