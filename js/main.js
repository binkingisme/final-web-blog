// JavaScript file for the main page
    // Increment views function
    function incrementViews(postId) {
        let viewElement = document.getElementById(postId);
        let currentViews = parseInt(viewElement.textContent);
        viewElement.textContent = currentViews + 1;
    }

    // Slideshow initialization
    document.addEventListener('DOMContentLoaded', function() {
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName('news');
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = 'block';
            setTimeout(showSlides, 3000);
        }

        let prevButton = document.querySelector('.prev');
        let nextButton = document.querySelector('.next');
        prevButton.addEventListener('click', function() {
            slideIndex -= 2;
            showSlides();
        });
        nextButton.addEventListener('click', function() {
            showSlides();
        });

        
    });
// Hiển thị nút khi cuộn xuống 20px từ đầu trang
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTopBtn").style.display = "block";
  } else {
      document.getElementById("backToTopBtn").style.display = "none";
  }
}

// Đưa người dùng về đầu trang khi nhấn vào nút
function scrollToTop() {
  document.body.scrollTop = 0; // Dành cho Safari
  document.documentElement.scrollTop = 0; // Dành cho Chrome, Firefox, IE, và Opera
}
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('visible');
      }
    });
  });
  