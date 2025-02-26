<script>

	import CombinedBasket from "./combined-basket.svelte";
    
    let infoShow = 'features';
    let selectedButton = 'features';
    
    const morchaFeatures = () => {
    
        infoShow = 'features';
        selectedButton = 'features';
    
    };
    
    const morchaSpecs = () => {
    
        infoShow = 'specs';
        selectedButton = 'specs';
    };
    
    
    </script>
    
    
    
    <div class="main-container">
        <div class="main-specs-wrapper">
    
        <div class="specs-area">
    
            <div class="button-area">
    
                <div class="trolley-button">
    
                    <button class="hover-animation" 
                            type="button" 
                            id="features"
                            data-selected={selectedButton === 'features'} 
                            on:click={morchaFeatures}>ARMOURED VEHICLES</button>
    
                </div>
    
                <div class="button-mid-line">&nbsp</div>
    
                <div class="trolley-button">
    
                    <button class="hover-animation" 
                            type="button" 
                            id="specs"
                            data-selected={selectedButton === 'specs'} 
                            on:click={morchaSpecs}>DEFENSE ARMOURED VEHICLES</button>
    
                </div>
    
            </div>
    
            <div class="spec-display" >
    
              <CombinedBasket morchaDetails={infoShow} />
    
            </div>
    
          
        </div>
    </div>
    
    </div>
    
    
    
    <style>
    
    
    .spec-display{
        transition: height 0.3s ease; /* Smooth transition when changing content */
    }


    .button-mid-line{
        border-left: 1px solid white;
    }
    
    
    #features, #specs{
        background-color: transparent;
        border: none;
        margin: 0;
        padding: 0;
        text-align: left;
        border-radius: 0;
    }
    
    .button-area{
        padding-block: 2rem;
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        background-color: #1e1e1e;
    
    }

    .hover-animation{
    display: inline-block;
    position: relative;
    color: white;

}

.hover-animation::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 0.1em;
	background-color: white;
	opacity: 0;
	transition: opacity 300ms, transform 300ms;
}

.hover-animation[data-selected="true"]::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: white;
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
}

.hover-animation:hover::after,
.hover-animation:focus::after {
	opacity: 1;
	transform: translate3d(0, 0.2em, 0);
}
    
    
</style>