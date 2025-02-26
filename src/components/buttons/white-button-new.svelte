<script>
    export let buttonName;
    export let buttonHeading;
    export let arrowIconUrl = './images/button-right-arrow.svg';
</script>





<div class="white-background-wrapper">
    <h1 class="white-background-text">{buttonHeading}</h1>
    <button  class='white-background-button'>
        <span class="button-name-span">{buttonName}</span>
        <img src={arrowIconUrl} alt="Arrow" class="arrow" />
    </button>
</div>


<style>

.white-background-wrapper{
        position: absolute;
        align-items: center;
        min-height:100vh;
        width:100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
}

.white-background-button{

    display: inline-flex;
      align-items: center;
      justify-content: center;
      
      align-items: center;
      padding: 1em 8em;
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 1px;
      color: black;
      text-decoration: none;
      border-radius: 50px; /* Gives the button its rounded shape */
      position: relative;
      overflow: hidden; /* Ensures the arrow only appears within the button */
      transition: all 0.3s ease; /* Smooth transition for button background and border */
    
}
    
.white-background-button span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 1;
    }

    .white-background-button .arrow {
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
.white-background-button:hover .arrow {
      opacity: 1;
      transform: translateX(0); /* Moves arrow to the right next to text */
    }
  
    /* Hover effect: text and arrow center themselves smoothly */
    .white-background-button:hover span {
      transform: translateX(-8px); /* Adjusts position to center with arrow */
    }

    .white-background-button:hover{
      color: tomato;
    }
    

/* 
    &-text{
        
        font-size: clamp(1rem, 3rem, 4rem);
        font-weight: 280;
        color: white;
        text-align: center;

    }
} */


</style>