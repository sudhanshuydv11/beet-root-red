<script>
    // Array of labels and descriptions
    let labels = [
      { title: "Bullet Resistant Glass", image: "./images/zoom1.jpg", description: "High-caliber resistant glass ensuring maximum safety." },
      { title: "Battery & ECP Protection", image: "./images/zoom2.jpg", description: "Reinforced materials to withstand bullets and explosions." },
      { title: "Reinforced Suspension", image: "./images/zoom3.jpg", description: "To handle the added weight from armouring." },
      { title: "Reinforced Steel Doors", image: "./images/zoom4.jpg", description: "Provides Ballistic Resistance and protects against heavy impacts." },
      { title: "Fuel Tank Protection", image: "./images/zoom5.jpg", description: "Safeguards the fuel tank from Ballistic Ammunition and small IED explosions" },
      { title: "Run-Flat Tire System", image: "./images/zoom6.jpg", description: "Tires capable of functioning after being punctured." },
      { title: "Armoured Bulkhead", image: "./images/zoom7.jpg", description: "Provides protection against ballistic threats & explosives ensuring the safety of the occupants." },
      { title: "Overlap Protection", image: "./images/zoom8.jpg", description: "Helps to create a tight Ballistic Seal around the vehicle." }
    ];
  </script>
  
  <style>
    @keyframes fade-in{
      to {scale: 1; opacity: 1;}
    }

    .main-container {
      width: min(85%, 80rem);
      margin-inline: auto;
      margin-bottom: 6rem;
    }

    .image-container {
      text-align: center;
      margin-bottom: 20px; /* Adds gap between the image and the labels */
      
      scale:0.8; opacity:0;
      animation: fade-in linear forwards;
      animation-timeline: view();
      animation-range: entry;
    }
  
    .image-container img {
      width: 100%; /* Makes the image full width */
      max-width: 100%; /* Prevents unnecessary resizing */
    }
  
    .labels-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* Default: 4 columns */
      gap: 15px; /* Space between cards */
    }
  
    .label-card {
      text-align: center;
      font-family: 'Helvetica';
      font-size: 0.8rem;
      border: 1px solid #ccc;
      padding: 10px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adds subtle shadow */
    }
  
    .label-card img {
      width: 100%;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
    }

    .area-title h1{
      text-align: center;
      font-size: 2rem;
      font-family: 'Oswald';
      font-weight: 200;
      margin: 0;
      padding: 2rem 0;
      padding-block: 5rem;
    }

    .label-line{
      border-top: 1px solid #222222;
    }

    .gap-above{
      margin-top: 6rem;
    }
  
    /* Responsive Design for Smaller Screens */
    @media (max-width: 768px) {
      .labels-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
      }
    }
  </style>
  
  <div class="main-container">

  <hr class="label-line">

  <div class="area-title">
    <h1>UNMATCHED ARMOURED EXCELLENCE</h1>
  </div>

  <div class="image-container">
    <!-- Main image -->
    <img src="./images/range-label-numbered.jpg" alt="Bulletproof Car">
  </div>
  
  <div class="labels-grid ">
    <!-- Display each label in a card -->
    {#each labels as label}
      <div class="label-card">
        <img src={label.image} alt={label.title}>
        <h3>{label.title}</h3>
        <p>{label.description}</p>
      </div>
    {/each}
  </div>
 
</div>