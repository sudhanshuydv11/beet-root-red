<script>
    import { onMount } from 'svelte';
  
    let images = [
      '/path/to/image1.jpeg',
      '/path/to/image2.jpeg',
      '/path/to/image3.jpeg'
    ];
  
    let currentIndex = 0;
    let interval;
  
    onMount(() => {
      startAutoplay();
    });
  
    function startAutoplay() {
      clearInterval(interval);
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
      }, 3000); // 3 seconds
    }
  
    function goToSlide(index) {
      currentIndex = index;
      startAutoplay();
    }
  
    $: progress = (currentIndex % images.length) * 100 / (images.length - 1);
  </script>
  
  <style>
    .carousel {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: auto;
    }
  
    .carousel-track {
      display: flex;
      transition: transform 0.8s ease;
    }
  
    .carousel-slide {
      min-width: 100%;
      transition: transform 0.5s ease;
    }
  
    .carousel img {
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  
    /* Center image larger */
    .carousel-slide.center img {
      transform: scale(1.2);
      transition: transform 0.5s ease;
    }
  
    .indicators {
      position: absolute;
      bottom: 10px;
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  
    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid #fff;
      background-color: transparent;
      position: relative;
      cursor: pointer;
    }
  
    .indicator .progress {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      background-color: #fff;
      animation: progressAnim 3s linear infinite;
    }
  
    /* MEDIA QUERIES */
    
    /* Desktop / Large screens */
    @media (min-width: 1024px) {
      .carousel {
        height: 600px;
      }
  
      .carousel img {
        height: 600px;
      }
      
      .carousel-slide.center img {
        transform: scale(1.3);
      }
  
      .carousel-slide:not(.center) {
        opacity: 0.7;
      }
    }
  
    /* Tablet screens */
    @media (min-width: 768px) and (max-width: 1023px) {
      .carousel {
        height: 450px;
      }
  
      .carousel img {
        height: 450px;
      }
  
      .carousel-slide.center img {
        transform: scale(1.25);
      }
  
      .carousel-slide:not(.center) {
        opacity: 0.7;
      }
    }
  
    /* Mobile screens */
    @media (max-width: 767px) {
      .carousel {
        height: 300px;
      }
  
      .carousel img {
        height: 300px;
      }
  
      .carousel-slide.center img {
        transform: scale(1.2);
      }
  
      .carousel-slide:not(.center) {
        opacity: 0.5;
      }
  
      /* Adjust the indicator size for mobile */
      .indicator {
        width: 10px;
        height: 10px;
      }
  
      .indicator .progress {
        width: 10px;
        height: 10px;
      }
    }
  
    @keyframes progressAnim {
      from { clip: rect(0px, 12px, 12px, 6px); }
      to { clip: rect(0px, 12px, 12px, 12px); }
    }
  
  </style>
  
  <div class="carousel">
    <div class="carousel-track" style="transform: translateX(-{100 * currentIndex}%)">
      {#each images as image, i}
        <div class="carousel-slide {i === currentIndex ? 'center' : ''}">
          <img src={image} alt="Carousel image {i + 1}">
        </div>
      {/each}
    </div>
  
    <!-- Animated Progress Indicator -->
    <div class="indicators">
      {#each images as _, i}
        <div class="indicator" on:click={() => goToSlide(i)}>
          <div class="progress" style="animation: progressAnim 3s linear infinite {i === currentIndex ? 'running' : 'paused'}"></div>
        </div>
      {/each}
    </div>
  </div>