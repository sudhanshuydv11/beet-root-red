<script>

    export let arrowIconUrl = './images/button-right-arrow.svg';

	import "./white-button-style.scss";
    export let buttonHeading;
    export let buttonLink='#';
</script>





<div class="white-background-wrapper">
    <h1 class="white-background-text">{buttonHeading}</h1>
    <a class="no-text-decoration button-with-arrow" href={buttonLink}>
        <span>DISCOVER NOW</span>
        <img src={arrowIconUrl} alt="Arrow" class="arrow" />
    </a>
</div>

<style>

        /* Styling for the button */
        .button-with-arrow {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-family: 'Poppins';
            align-items: center;
            padding: 1em 8em;
            font-size: 0.8rem;
            font-weight: 400;
            letter-spacing: 1px;
            color: black;
            text-decoration: none;
            border: none;
            background-color: white;
            border-radius: 50px; /* Gives the button its rounded shape */
            position: relative;
            overflow: hidden; /* Ensures the arrow only appears within the button */
            transition: all 0.3s ease; /* Smooth transition for button background and border */
          }
        
          /* Initial state: only the text is visible */
          .button-with-arrow span {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease, opacity 0.3s ease;
            opacity: 1;
          }
        
          /* Initial state: hide the arrow by setting its opacity to 0 */
          .button-with-arrow .arrow {
            position: absolute;
            width: 24px;
            height: 24px;
            margin-left: 8px;
            right: 5rem;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            transform: translateX(-10px); /* Shift arrow left initially */
          }
        
          /* Hover effect: arrow fades in and moves to original position */
          .button-with-arrow:hover .arrow {
            opacity: 1;
            transform: translateX(0); /* Moves arrow to the right next to text */
          }
        
          /* Hover effect: text and arrow center themselves smoothly */
          .button-with-arrow:hover span {
            transform: translateX(-8px); /* Adjusts position to center with arrow */
          }






</style>
    
