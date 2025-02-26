<script>
	import Indicator from "../../containers/indicator.svelte";
	import ProgressIndicator from "../carousel-indicator/progress-indicator.svelte";




    // Define the images for the carousel
    let images = [
      { src: './images/arch-img1.jpg', description: 'Image 1' },
      { src: './images/arch-img2.jpg', description: 'Image 2' },
      { src: './images/arch-img3.jpg', description: 'Image 3' }
    ];
  
    // Define the current image index
    let currentImage = 0;
  
    // Define the interval for the auto-slide
    let intervalId;
  
    // Function to handle mouse enter and pause the carousel
    function handleMouseEnter() {
      // Clear the interval to pause the carousel
      clearInterval(intervalId);
    }
  
    // Function to handle mouse leave and resume the carousel
    function handleMouseLeave() {
      // Set a new interval to resume the carousel
      intervalId = setInterval(() => {
        // Move to the next image
        currentImage = (currentImage + 1) % images.length;
      }, 5000); // 5 seconds
    }
  
    // Initialize the interval
    intervalId = setInterval(() => {
      // Move to the next image
      currentImage = (currentImage + 1) % images.length;
    }, 5000); // 5 seconds
  </script>
  
  <!-- Carousel container -->
  <div class="carousel small" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
    <!-- Image container -->
    {#each images as image, index}
      <img
        src={image.src}
        alt={image.description}
        class={index === currentImage ? 'active' : ''}
      />
    {/each}
  </div>

  <div class="carousel-intro-indicator">
    <Indicator currentIndex={currentImage}
		quantity={images.length}
		indicatorClass={'dual-carousel-indicator'}
    strokeColor="black"
    fillColor="black"
		let:showTimer>
	<ProgressIndicator progressIndicatorClass='dual-carousel-progress-indicator' 
		showTimer={showTimer}/>
</Indicator>
  </div>
  

  
  <style>

    
@media (max-width: 40em) {
  .carousel {
    height: 200px; 
  }
}

    .carousel {
      position: relative;
      width: min(80%, 50rem);
      height: 400px;
      margin-top: 2rem;
    }
  
    .carousel img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: opacity 0.5s;
    }
  
    .carousel img.active {
      opacity: 1;
    }
  
    .carousel img:not(.active) {
      opacity: 0;
    }

    @media (max-width: 40em) {
    .carousel.small {
        height: 300px;
    }
}
  

  </style>