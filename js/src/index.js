window.addEventListener("scroll", function() {
  let navScroll = this.document.getElementById('nav')
  navScroll.classList.toggle("fixed", window.scroll > 10 );
})