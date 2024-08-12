    // Function to update views
    function updateViews(postId) {
        const viewsElement = document.getElementById(`views-${postId}`);
        let views = parseInt(viewsElement.innerText);
        views += 1;
        viewsElement.innerText = views;
    }

    // Call updateViews function when a post is viewed
    document.querySelectorAll('.card a').forEach((link, index) => {
        link.addEventListener('click', () => {
            updateViews(`post-${index + 1}`);
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
      // Hàm để tăng số lượt xem
      function incrementViews(viewId) {
          const viewElement = document.getElementById(viewId);
          if (viewElement) {
              let currentViews = parseInt(viewElement.textContent, 10);
              currentViews++;
              viewElement.textContent = currentViews;
          }
      }
  
      // Gán hàm incrementViews vào global scope để có thể gọi từ HTML
      window.incrementViews = incrementViews;
  });

    // Slideshow functionality
    document.addEventListener("DOMContentLoaded", function() {
        let slideIndex = 0;
        showSlides();
      
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
      
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("slide");
          if (n === undefined) { n = ++slideIndex; }
          if (n > slides.length) { slideIndex = 1 }
          if (n < 1) { slideIndex = slides.length }
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[slideIndex-1].style.display = "block";
        }
      
        setInterval(() => {
          showSlides();
        }, 3000); // Tự động chuyển slide sau mỗi 3 giây
      
        document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
        document.querySelector('.next').addEventListener('click', () => plusSlides(1));
      });