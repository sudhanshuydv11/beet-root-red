<script>
    // Labels and their descriptions
    let descriptions = {
      1: "Bulletproof Windshield: High-caliber resistant glass ensuring maximum safety.",
      2: "Armored Door Panels: Reinforced materials to withstand bullets and explosions.",
      3: "Run-Flat Tires: Tires capable of functioning after being punctured.",
      4: "Reinforced Roof: Protects against heavy impacts.",
      5: "Bulletproof Windows: Multi-layered glass for extra safety.",
      6: "Blast-Proof Floor: Shields against landmine explosions.",
      7: "Sealed Cabin: Protects against gas attacks.",
      8: "Reinforced Rear: Provides protection to the vehicle's rear side."
    };
    let selectedDescription = "Click a marker on the image to see details.";
  
    // Function to update the displayed description
    function showDescription(num) {
      selectedDescription = descriptions[num];
    }

    function handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showDescription(event.target.innerText);
      }
    }

  </script>
  
  <style>
    .image-container {
      position: relative;
      text-align: center;
    }
  
    .marker {
      position: absolute;
      background: red;
      color: white;
      padding: 5px 10px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 0.9em;
    }
  
    .description {
      margin-top: 20px;
      text-align: left;
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
      background-color: #f9f9f9;
    }
  
    @media (max-width: 600px) {
      .marker {
        font-size: 0.7em;
        padding: 4px 8px;
      }
  
      .description {
        font-size: 0.9rem;
      }
    }
  </style>
  
  <div class="image-container">
    <!-- The main image -->
    <img src="car-image.jpg" alt="Bulletproof Car" style="width: 100%; max-width: 800px;">
  
    <!-- Place the markers -->
    <button class="marker" style="top: 10%; left: 50%;" on:click={() => showDescription(1)} on:keydown={handleKeyDown}>1</button>
    <button class="marker" style="top: 30%; left: 20%;" on:click={() => showDescription(2)} on:keydown={handleKeyDown}>2</button>
    <button class="marker" style="top: 40%; left: 70%;" on:click={() => showDescription(3)} on:keydown={handleKeyDown}>3</button>
    <button class="marker" style="top: 50%; left: 30%;" on:click={() => showDescription(4)} on:keydown={handleKeyDown}>4</button>
    <button class="marker" style="top: 60%; left: 50%;" on:click={() => showDescription(5)} on:keydown={handleKeyDown}>5</button>
    <button class="marker" style="top: 70%; left: 80%;" on:click={() => showDescription(6)} on:keydown={handleKeyDown}>6</button>
    <button class="marker" style="top: 80%; left: 40%;" on:click={() => showDescription(7)} on:keydown={handleKeyDown}>7</button>
    <button class="marker" style="top: 90%; left: 60%;" on:click={() => showDescription(8)} on:keydown={handleKeyDown}>8</button>
  </div>
  
  <div class="description">
    <p>{selectedDescription}</p>
  </div>
  