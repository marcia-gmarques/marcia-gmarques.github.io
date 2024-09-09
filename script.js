/*For index video to play after loading*/
 $(document).ready(function() {
  // Create the video element and append it to the body
  var video = $('<video class="loop" muted playsinline loop autoplay>');
  video.append('<source src="video/portfolioIntro_1.mp4" type="video/mp4">'); 
  //$('.body-bg-img').prepend('<div class="video-bg"></div>');
  $('.video-bg').append(video);

  // Add an event listener to track when the video is loaded
  video.on('loadeddata', function() {
    $(this).addClass('loaded'); // Mark the video as loaded
    $('.body-bg-img').css('background-image', 'none'); // Remove the body background image once the video is loaded
  });
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
  
    window.addEventListener('resize', updateClass); // Call the function on window resize
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
        link.classList.add('active');  // Add the 'active' class to the current link
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
  // Define an array with the order of project links as they appear on the digital design page
  // Add here the additional project html pages I wanna add in the future, so order remains
  const projectLinks = [
      'blijdorp-ad.html',
      'blijdorp-illustrations.html',
      'yields.html',
      'dcsa.html',
      'ekwos-brand.html',
      'ekwos-posters.html',
      'freelance-posters.html',
      'freelance-web.html'
  ];

  // Get the current URL to find the current project's position
  const currentUrl = window.location.pathname.split('/').pop(); // Gets the current page filename
  const currentIndex = projectLinks.indexOf(currentUrl); // Find the index of the current project

  // Get button elements
  const lastButton = document.getElementById('last-project');
  const nextButton = document.getElementById('next-project');

  // Hide 'Last Project' button if it's the first project
  if (currentIndex === 0) {
      lastButton.style.display = 'none';
  } else {
      lastButton.style.display = 'inline-block';
      lastButton.onclick = function() {
          window.location.href = projectLinks[currentIndex - 1]; // Navigate to the previous project
      };
  }

  // Hide 'Next Project' button if it's the last project
  if (currentIndex === projectLinks.length - 1) {
      nextButton.style.display = 'none';
  } else {
      nextButton.style.display = 'inline-block';
      nextButton.onclick = function() {
          window.location.href = projectLinks[currentIndex + 1]; // Navigate to the next project
      };
  }
}

// Initialize navigation on page load
window.onload = initializeProjectNavigation;



