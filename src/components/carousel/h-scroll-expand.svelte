<script>

    import { onMount } from 'svelte';
    import { onDestroy } from 'svelte';

    let currentSlide = 0;
    let slideCount = 2; // The total number of slides
    let interval;
  
    // Move to the next slide
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slideCount;
    };
  
    // Move to a specific slide
    const moveToSlide = (index) => {
      currentSlide = index;
    };
  
    // Start the autoplay interval
    const startAutoPlay = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Move every 5 seconds
    };
  
    // Handle manual click on the indicators
    const handleIndicatorClick = (index) => {
      moveToSlide(index);
      startAutoPlay(); // Restart autoplay on manual interaction
    };
  
    // Autoplay when the component is mounted
    onMount(() => {
      startAutoPlay();
    });
  
    // Clear the interval when the component is destroyed
    onDestroy(() => {
      clearInterval(interval);
    });
  </script>
  
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  
    .carousel-wrapper {
      position: relative;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      overflow: hidden;
    }
  
    .carousel {
      display: flex;
      align-items: center;
      overflow: hidden;
      position: relative;
    }
  
    .carousel-track {
      display: flex;
      transition: transform 1s ease-in-out;
      width: 100%;
    }
  
    .carousel img, .dual-image-wrapper img {
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: opacity 0.5s ease-in-out;
    }
  
    .dual-image-wrapper {
      display: flex;
      gap: 3rem;
    }
  
    .carousel-indicators {
      display: flex;
      justify-content: center;
      margin-top: 15px;
    }
  
    .indicator {
      position: relative;
      width: 20px;
      height: 20px;
      margin: 0 10px;
    }
  
    .progress-circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid black;
      position: relative;
      clip-path: circle(50%);
    }
  
    .progress-circle::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: black;
      animation: progress 5s linear infinite;
    }
  
    @keyframes progress {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  
    @media (max-width: 600px) {
      .carousel-wrapper {
        max-width: 100%;
      }
  
      .carousel img, .dual-image-wrapper img {
        width: 100vw;
        height: auto;
      }
    }
  </style>
  
  <div class="carousel-wrapper">
    <div class="carousel">
      <div
        class="carousel-track"
        style="transform: translateX(-{currentSlide * 100}%);"
      >
        <!-- First image -->
        <div class="slide">
          <img src="./images/h-car-image1.jpg" alt="Image 1" />
        </div>
  
        <!-- Second image with dual images -->
        <div class="slide dual-image-wrapper">
          <img src="./images/h-car-image2-1.jpg" alt="Image 2 Left" />
          <img src="./images/h-car-image2-2.jpg" alt="Image 2 Right" />
        </div>
      </div>
    </div>
  
    <!-- Indicators -->
    <div class="carousel-indicators">
      {#each Array(slideCount) as _, i}
        <div class="indicator" on:click={() => handleIndicatorClick(i)}>
          <div
            class="progress-circle"
            class:active={i === currentSlide}
          ></div>
        </div>
      {/each}
    </div>
  </div>
  