
<script>

import "./hamburger-demo-style.scss";
export let isMenuOpen=false;

// let hamRef;


// $:{
//     if (hamRef) {
//         hamRef.addEventListener('click', (e) => {
// 	    e.currentTarget.classList.toggle('is-active');
//     })
//     }

// }

</script>




<div class="hamburger {isMenuOpen?'is-active':''}">
    <div class="hamburger__container">
      <div class="hamburger__inner"></div>
      <div class="hamburger__hidden"></div>
    </div>
  </div>




