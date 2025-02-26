


<div class="call-icon-container">
  
  <div class="call-icon">
    <img src="./images/contact-icon.svg" alt="">
  </div>
  
</div>






<style>



.call-icon-container{

  width: 1.563rem;
  height: 1.25rem;
  align-self: center;

}

.call-icon{
  width: 100%;
  height: 100%;
}


.call-icon:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}






</style>