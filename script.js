
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
  window.addEventListener('DOMContentLoaded', function() {
    // Get the reference to the elements
    var titleContainer = document.getElementById('titleContainer');
    var title = titleContainer.querySelector('h1');
    console.log("title", title);
    
    var row = document.querySelector('.container-photography .row');
    console.log("row", row);

    // Check if the screen size is small
    var isSmallScreen = window.innerWidth <= 768;  
  
    // Move the titleContainer to the top
    if (isSmallScreen) {

        row.parentNode.insertBefore(titleContainer, row);

        titleContainer.style.position = 'absolute';
        title.classList.remove('display-1');
        title.classList.add('display-4');
        titleContainer.style.left = '50%';
        titleContainer.style.transform = 'translateX(-50%)';


      
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
  


/*Animate content from the right side for graphic design page*/ 
/* function animateContent() {
  const elements = document.querySelectorAll('.col-lg-4');
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight &&
      rect.right <= windowWidth
    ) {
      element.classList.add('animate-right');
    } else {
      element.classList.remove('animate-right');
    }
  });
} */


window.addEventListener("resize", adjustColumns);
adjustColumns();

function checkScrollable() {
  var container = document.getElementById("posterContainer");
  if (container.scrollWidth > container.clientWidth) {
    container.style.overflowX = "auto";
  } else {
    container.style.overflowX = "hidden";
  }
}

window.addEventListener("resize", checkScrollable);
checkScrollable();




