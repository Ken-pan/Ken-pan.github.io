const headers = document.querySelectorAll('.li:first-child')

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling
    content.style.display = content.style.display === 'none' ? 'block' : 'none'
  })
})
