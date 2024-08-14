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
