const modal = document.getElementById('modal');
const btnOpenModal = document.getElementById('open-modal');
const btnCloseModal = document.getElementById('close-modal');

btnOpenModal.onclick = function() {
  modal.style.display = "block";
}

btnCloseModal.onclick = function() {
  modal.style.display = "none";
}

// Закрытие шторки при клике вне ее
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 