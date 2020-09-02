const notificationClose = document.querySelectorAll('.notification-close')

notificationClose.forEach((e) =>
  e.addEventListener('click', function () {
    e.parentElement.style.display = 'none'
  })
)
