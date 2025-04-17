document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a nav link
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      }
    })
  })

  // Sticky Header
  window.addEventListener("scroll", () => {
    const header = document.querySelector("#header")
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
      header.style.padding = "10px 0"
    } else {
      header.classList.remove("scrolled")
      header.style.padding = "15px 0"
    }
  })

  // Gallery Slider
  const slides = document.querySelectorAll(".gallery-slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")
  let currentSlide = 0

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    currentSlide = (n + slides.length) % slides.length

    slides[currentSlide].classList.add("active")
    dots[currentSlide].classList.add("active")
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => showSlide(currentSlide - 1))
    nextBtn.addEventListener("click", () => showSlide(currentSlide + 1))
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const slideIndex = Number.parseInt(this.getAttribute("data-index"))
      showSlide(slideIndex)
    })
  })

  // Auto slide
  setInterval(() => {
    showSlide(currentSlide + 1)
  }, 5000)

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const phone = document.getElementById("phone").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For this example, we'll just show an alert
      alert(`Teşekkürler ${name}! Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.`)

      // Reset form
      contactForm.reset()
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector("#header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})