// Change scrollbar style depending on the body class 
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const style = document.createElement('style');
  document.head.appendChild(style);

  // Function to set scrollbar styles based on body class
  function setScrollbarStyles() {
    if (body.classList.contains('bodyBlack')) {
      style.innerHTML = `
        /* width */
        ::-webkit-scrollbar {
          width: 1.2vw;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: #000000;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #ebe1d3;
          border: 0.2vw solid #000000; 
          box-sizing: border-box; 
        }
      `;
    } else {
      style.innerHTML = `
        /* width */
        ::-webkit-scrollbar {
          width: 1.2vw;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: #ebe1d3; 
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #000000;   
          border: 0.2vw solid #ebe1d3; 
          box-sizing: border-box;      
        }

      `;
    }
  }

  // Run the function initially
  setScrollbarStyles();
});




/*For index video to play after loading*/
 $(document).ready(function() {
  // Create the video element and append it to the body
  var video = $('<video class="loop" muted playsinline loop autoplay>');
  video.append('<source src="video/portfolioIntro_1.mp4" type="video/mp4">'); 
  //$('.body-bg-img').prepend('<div class="video-bg"></div>');
  $('.video-bg').append(video);

  // Add an event listener to track when the video is loaded
  video.on('loadeddata', function() {
    $(this).addClass('loaded'); 
    $('.body-bg-img').css('background-image', 'none'); 
  });
}); 



/*For cursor on index page to change*/
document.addEventListener('DOMContentLoaded', function () {

  if($('body').is('.body-bg-img')){ //only works in index page, so it doesnt raise errors when on other pages
    const centredDiv = document.querySelector('.centred-div');
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    customCursor.innerText = 'Explore';
    document.body.appendChild(customCursor);
  
    centredDiv.addEventListener('mouseenter', () => {
        customCursor.style.visibility = 'visible';
        customCursor.style.opacity = '1';
    });
  
    centredDiv.addEventListener('mouseleave', () => {
        customCursor.style.visibility = 'hidden';
        customCursor.style.opacity = '0';
    });
  
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });
  
    // Add click event to navigate to digitaldesign.html
    centredDiv.addEventListener('click', () => {
      window.location.href = 'digitaldesign.html';
    });
  }
});



/*For Photography textover to change size in small screens*/ 
window.addEventListener('DOMContentLoaded', function() {
    var textOverElements = document.getElementsByClassName('textover');


    function updateClass() {
      var screenWidth = window.innerWidth;
  
      for (var i = 0; i < textOverElements.length; i++) {
        var element = textOverElements[i];

        if (element.classList.contains('display-5')) {
            element.classList.remove('display-5');
            element.classList.add('display-6');
        }
      }
    }
  
    updateClass(); // Call the function initially
  
    window.addEventListener('resize', updateClass); 
});
  


/*For Photography title to go to the top of the page*/
$(document).ready(function() {
  // Get the reference to the elements
  var $titleContainer = $('#titleContainer');

  // Check if titleContainer exists and has a length higher than zero
  if ($titleContainer.length > 0) {
    var $title = $titleContainer.find('h1');
    console.log("title", $title);

    var $row = $('#rowPhotos');
    console.log("row", $row);

    // Check if the screen size is small
    var isSmallScreen = window.innerWidth <= 768;

    // Move the titleContainer to the top
    if (isSmallScreen) {
      $row.before($titleContainer);

      $titleContainer.css({
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      });

      $title.removeClass('display-1').addClass('display-4');
    }
  }
});

  

/*Style the current page link in the nav bar*/ 
window.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPageUrl = window.location.href;
  
    // Get the reference to the navbar links
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    // Loop through each link and check if the current page URL contains the link's href
    navLinks.forEach(function(link) {
      if (currentPageUrl.includes(link.href)) {
        link.classList.add('active');  
      }
    });
});



/*Remove the last headingWeb for small screens*/ 
window.addEventListener('DOMContentLoaded', () => {
  function removeHeadingWeb() {
    const headingWebElements = document.querySelectorAll('.headingWeb');
    headingWebElements.forEach((element) => {
      element.remove();
    });
  }

  function checkScreenSize() {
    if (window.innerWidth < 768) {
      removeHeadingWeb();
    }
  }

  // Call the function on page load
  checkScreenSize();

  // Call the function on window resize
  window.addEventListener('resize', checkScreenSize);
});
  



// Function to initialize navigation buttons based on the current project
function initializeProjectNavigation() {
  // Add here the additional project html pages I wanna add in the future, so order remains
  const projectLinks = [
      'blijdorp-ad.html',
      'blijdorp-illustrations.html',
      'yields.html',
      'dcsa.html',
      'ekwos-brand.html',
      'ekwos-posters.html',
      'freelance-posters.html',
      'freelance-web.html', 
      'printcil.html',
  ];

  // Get the current URL to find the current project's position
  const currentUrl = window.location.pathname.split('/').pop(); 
  const currentIndex = projectLinks.indexOf(currentUrl); 

  // Check if the current URL is in the projectLinks array so there is no raised errors on other pages when it tried to style the buttons
  if (currentIndex === -1) {
    // Exit if the current page is not in the projectLinks array
    return;
}

  // Get button elements
  const lastButton = document.getElementById('last-project');
  const nextButton = document.getElementById('next-project');

  // Hide 'Last Project' button if it's the first project
  if (currentIndex === 0) {
      lastButton.style.display = 'none';
  } else {
      lastButton.style.display = 'inline-block';
      lastButton.onclick = function() {
          window.location.href = projectLinks[currentIndex - 1];
      };
  }

  // Hide 'Next Project' button if it's the last project
  if (currentIndex === projectLinks.length - 1) {
      nextButton.style.display = 'none';
  } else {
      nextButton.style.display = 'inline-block';
      nextButton.onclick = function() {
          window.location.href = projectLinks[currentIndex + 1]; 
      };
  }
}

// Initialize navigation on page load
window.onload = initializeProjectNavigation;








//Filter the digital design cards with filter buttons
//On click it shows the card with the same data category and hides the rest

//  $(document).ready(function(){
//   $(".filter-btn").click(function(){
//     var category = $(this).attr("data-filter");

//     // Show all cards if 'all' is clicked
//     if(category === "all"){
//       $("[data-category]").show();
//     } else {
//       // Hide all cards and show the ones matching the selected category
//       $("[data-category]").hide();
//       $("[data-category='" + category + "']").show();
//     }
//   });
// }); 




// Load GSAP for scroll trigger animation of the cards in digital design page
document.addEventListener("DOMContentLoaded", function() {

  const cardsContainer = document.getElementById('digital-design-cards');

  if (cardsContainer) {
    gsap.registerPlugin(ScrollTrigger);
      // Function to create animations
    function animateCards() {

      // Select all cards in the first column (left)
      const leftCards = document.querySelectorAll('.row > .col-lg-6:nth-child(1) .card');
      
      leftCards.forEach((card, index) => {
          gsap.from(card, {
              x: -100, // Slide in from the left
              opacity: 0,
              duration: 0.5,
              scrollTrigger: {
                  trigger: card,
                  start: 'top 90%', 
                  toggleActions: 'play none none reverse',
                  markers: false
              }
          });
      });

      // Select all cards in the second column (right)
      const rightCards = document.querySelectorAll('.row > .col-lg-6:nth-child(2) .card');
      
      rightCards.forEach((card, index) => {
          gsap.from(card, {
              x: 100, // Slide in from the right
              opacity: 0,
              duration: 0.5,
              scrollTrigger: {
                  trigger: card,
                  start: 'top 90%', 
                  toggleActions: 'play none none reverse',
                  markers: false
              }
          });
      });
    }

      // Initialize animations on page load
      window.onload = animateCards;
  }
});


//Only when on the index page, animate headings with GSAP
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {

  window.onload = function() {
    const headingHome = document.querySelectorAll('.headingHome');
    const headingHomePortfolio = document.querySelector('.headingHomePortfolio');

    // Animate the main headings
    gsap.from(headingHome, {
      y: -50, // slides down
      opacity: 0, 
      duration: 1,
      stagger: 0.5, // Delay between each heading
      ease: "power1.out"
    });

    // Animate the portfolio heading
    gsap.from(headingHomePortfolio, {
      y: 50, //slides up
      opacity: 0,
      duration: 1,
      delay: 1.7, // starts after the previous animations
      ease: "power1.out"
    });
  }
}













