window.addEventListener('scroll', () => {
  const header = document.querySelector('.header') // Use querySelector to get a single element
  if (window.innerWidth > 1200) {
    if (window.scrollY > 0) {
      // Check if the user has scrolled down
      header.style.backgroundColor = 'rgba(19, 20, 40, 1)'
    } else {
      header.style.backgroundColor = 'rgba(19, 20, 40, 0.1)' // Reset to default background color
    }
  }
})
