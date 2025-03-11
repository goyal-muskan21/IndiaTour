/* script.js */
document.addEventListener('DOMContentLoaded', function() {
     // Mobile Menu Toggle
     const menuToggle = document.querySelector('.menu-toggle');
     const nav = document.querySelector('nav');
   
     menuToggle.addEventListener('click', () => {
       nav.classList.toggle('show');
     });
   
     // Image Gallery Interaction (Lightbox-like)
     const galleryImages = document.querySelectorAll('.gallery img');
     galleryImages.forEach(img => {
       img.addEventListener('click', () => {
         const overlay = document.createElement('div');
         overlay.classList.add('lightbox-overlay');
         const lightboxImage = document.createElement('img');
         lightboxImage.src = img.src;
         lightboxImage.classList.add('lightbox-image');
   
         overlay.appendChild(lightboxImage);
         document.body.appendChild(overlay);
   
         overlay.addEventListener('click', () => {
           document.body.removeChild(overlay);
         });
       });
     });
   
     // Contact Form Submission (Simple Feedback)
     const contactForm = document.getElementById('contactForm');
     const formMessage = document.getElementById('formMessage');
   
     contactForm.addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent default form submission
   
       // Simulate form submission (replace with actual backend integration)
       setTimeout(() => {
         formMessage.textContent = 'Message sent successfully!';
         formMessage.classList.add('success');
         contactForm.reset();
         setTimeout(()=>{
           formMessage.textContent="";
           formMessage.classList.remove('success');
         }, 3000);
   
       }, 500); // Simulate delay
     });
   
     // Scroll Behavior (Smooth Scrolling)
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
         e.preventDefault();
   
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
           window.scrollTo({
             top: target.offsetTop - 60, // Adjust for header height
             behavior: 'smooth'
           });
   
           // Close mobile menu if open
           if (nav.classList.contains('show')) {
             nav.classList.remove('show');
           }
         }
       });
     });
   
     //Destination Link functionality
     document.querySelectorAll('.destination-link').forEach(link=>{
       link.addEventListener('click', (event)=>{
         event.preventDefault();
         alert("More information about this destination would be implemented in a full application.");
       })
     })
   
   });