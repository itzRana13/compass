$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    });

    var $featuredProperties = $('.featured-properties');

    $featuredProperties.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false
    });

    $('.slick-links-nav .prev').click(function(){
        // Get the current slide index
        var currentIndex = $featuredProperties.slick('slickCurrentSlide');
        
        // Check if it's not the first slide
        if (currentIndex > 0) {
            $featuredProperties.slick('slickPrev');
        }
    });

    $('.slick-links-nav .next').click(function(){
        // Get the current slide index
        var currentIndex = $featuredProperties.slick('slickCurrentSlide');
        var slidesCount = $featuredProperties.slick('getSlick').slideCount;

        // Check if it's not the last slide
        if (currentIndex < slidesCount - 1) {
            $featuredProperties.slick('slickNext');
        }
    });

    

    const statValues = document.querySelectorAll('.stat-card__value.jsValue');

    statValues.forEach(valueElement => {
        const targetValue = parseInt(valueElement.textContent.trim().replace(/\D/g, ''));
        if (isNaN(targetValue)) {
            console.error("Invalid target value for:", valueElement);
            return;
        }

        let startValue = 0;
        const increment = Math.ceil(targetValue / 100); 

        const interval = setInterval(() => {
            const parts = valueElement.textContent.trim().match(/(^[\D]+)(\d+)([\D]*$)/);
            if (parts && parts.length === 4) {
                valueElement.textContent = parts[1] + startValue + parts[3]; 
            } else {
                valueElement.textContent = '$' + startValue + 'M'; 
            }

            startValue += increment;
            if (startValue >= targetValue) {
                valueElement.textContent = '$' + targetValue + 'M'; 
                clearInterval(interval);
            }
        }, 70); 
    });

    // var copy = document.querySelector(".logos-slide").cloneNode(true);
    // document.querySelector(".logos").appendChild(copy);
      
      
});

$(document).ready(function(){
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var navbar = document.querySelector('.navbar-section');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.remove('navbar-transparent');
            navbar.style.backgroundColor = '#000';
        } else {
            navbar.classList.add('navbar-transparent');
            navbar.style.backgroundColor = 'transparent';
        }
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Show loading state
    document.getElementById('submit-button').querySelector('.label-initial').style.display = 'none';
    document.getElementById('submit-button').querySelector('.label-loading').style.display = 'inline-block';
    document.getElementById('submit-button').querySelector('.submit-icon').style.display = 'inline-block';

    // Simulate form submission (you can replace this with your actual submission logic)
    setTimeout(function() {
        // Hide loading state
        document.getElementById('submit-button').querySelector('.label-loading').style.display = 'none';
        document.getElementById('submit-button').querySelector('.submit-icon').style.display = 'none';

        // Show success message
        document.querySelector('.success-message').style.display = 'block';
        document.getElementById('submit-button').querySelector('.label-success').style.display = 'inline-block';

        // Reset form
        document.getElementById('contact-form').reset();
    }, 2000); // Simulating a delay of 2 seconds, replace with your actual submission process
});

// JavaScript function to show the modal
function showContactFormModal() {
    var modal = document.getElementById('modal-global-contact-us');
    modal.style.display = 'block';
}

// JavaScript function to hide the modal
function hideContactFormModal() {
    var modal = document.getElementById('modal-global-contact-us');
    modal.style.display = 'none';
}

// Attach event listener to the "Contact Us" button
document.getElementById('contact-us-button').addEventListener('click', showContactFormModal);

// Attach event listener to close button within the modal
document.querySelector('#modal-global-contact-us .close').addEventListener('click', hideContactFormModal);

// Close the modal if user clicks outside of it
window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal-global-contact-us');
    if (event.target == modal) {
        hideContactFormModal();
    }
});

$(document).ready(function(){
    // Hide all submenus initially
    $('.dropdown-submenu ul').hide();
  
    // Show submenu when hovering over parent element
    $('.dropdown-submenu').hover(
      function() {
        $(this).find('ul').show();
      },
      function() {
        $(this).find('ul').hide();
      }
    );
});
  
  