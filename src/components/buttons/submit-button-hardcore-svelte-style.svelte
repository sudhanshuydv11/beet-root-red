<script>
    export let buttonName;
    export let buttonClass;

    // Reactive state variables
    let isLoading = false;
    let isDone = false;

    function handleClick() {
        if (!isLoading && !isDone) {
            isLoading = true;

            // Simulate async operation
            setTimeout(() => {
                isLoading = false;
                isDone = true;
            }, 3000);
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
    class={`border-button ${buttonClass} ${isLoading ? 'checked' : ''}`}
    on:click={handleClick}
    disabled={isLoading || isDone}
    style={isLoading ? 'cursor: wait;' : ''}
>
    {#if isLoading}
        <i class="fa-solid fa-circle-notch icon spinner spin"></i>
        <span class="btn-text">SENDING</span>
    {:else if isDone}
        <i class="fa-regular fa-circle-check icon check"></i>
        <span class="btn-text">DONE</span>
    {:else}
        <span class="btn-text">{buttonName}</span>
    {/if}
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
    display: none;
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

  /* Disable styles when button is disabled */
  .border-button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
</style>
