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
      'freelance-web.html'
  ];

  // Get the current URL to find the current project's position
  const currentUrl = window.location.pathname.split('/').pop(); 
  const currentIndex = projectLinks.indexOf(currentUrl); 

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



