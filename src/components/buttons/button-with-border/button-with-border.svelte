<script>
    export let buttonName;
    export let buttonClass;
    export let onClick;
  
    let btn;
    let spinIcon;
    let btnText;
  
    function handleClick() {
      onClick();
      if (btn) {
        // Disable button, change cursor to 'wait'
        btn.style.cursor = 'wait';
        btn.classList.add('checked');
        spinIcon.classList.add('spin');
        spinIcon.style.display = 'inline-flex';  // Ensure spinner icon is visible
        btnText.textContent = 'SENDING';
  
        // Disable pointer events for the button to prevent re-click
        btn.style.pointerEvents = 'none';
  
        setTimeout(() => {
          // Change icon to checkmark and update button text to 'DONE'
          spinIcon.classList.remove('spin'); // Remove spinner animation class
          spinIcon.classList.add('check'); // Add check icon
          spinIcon.classList.replace('fa-circle-notch', 'fa-circle-check');
          btnText.textContent = 'DONE';
  
          // Reset button state after 4 seconds
          setTimeout(() => {
            // Reset button to initial state
            btn.style.pointerEvents = 'auto'; // Make button clickable again
            spinIcon.classList.remove('check');
            spinIcon.classList.add('spinner');
            spinIcon.classList.replace('fa-circle-check', 'fa-circle-notch');
            spinIcon.style.display = 'none';  // Hide spinner icon initially
            btnText.textContent = 'SEND A MESSAGE';
            btn.style.cursor = 'pointer'; // Reset cursor
          }, 4000); // Reset after 4 seconds
        }, 3000); // Simulate process completion after 3 seconds
      }
    }
  </script>
  
  <svelte:head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    />
  </svelte:head>
  
  <button
    bind:this={btn}
    class={`border-button ${buttonClass}`}
    on:click={handleClick}
  >
    <i bind:this={spinIcon} class="fa-solid fa-circle-notch icon spinner"></i>
    <span bind:this={btnText} class="btn-text">{buttonName}</span>
  </button>
  
  <style>
    .border-button {
      width: 18rem;
      display: flex;
      height: 3rem;
      background: transparent;
      border-width: 0.1rem;
      border-color: black;
      border-radius: 2rem;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  
    .border-button .icon {
      font-size: 1rem;
      margin-right: 10px;
      display: none; /* Hide by default */
    }
  
    .icon.check {
      color: green;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
    }
  
    .icon.spinner.spin {
      display: inline-flex;
      animation: spin 1.3s ease-in-out infinite;
    }
  
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  
    .border-button.checked .icon.spinner {
      display: inline-flex;
    }
  
    .btn-text {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 0.8rem;
      letter-spacing: 0.2rem;
      background-color: transparent;
      text-align: center;
      border: none;
      color: black;
      transition: color 0.3s ease;
    }
  
    .border-button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  </style>
  