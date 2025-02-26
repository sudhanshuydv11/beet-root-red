const noop =()=>{};
export const FULL_WIDTH_IMAGE_BASGET_ITEM_WIDTH_PERCENT=30;

export const defaultInitialPosition=(images, offset=0)=>images.map((_,index)=> (index*100) + offset);

export const getIsImagesLessThanViewport=(images)=>{
const offset=(images.length * FULL_WIDTH_IMAGE_BASGET_ITEM_WIDTH_PERCENT)/100;

return offset<1;
};

export const handleSliderWheel=(e, alterConstantValue)=>{
    if ((e.deltaX !== 0)) {
        e.preventDefault();
    }
    alterConstantValue(e.deltaX);
};

export const handlePointerScroll=(alterConstantValue)=>{
    let intervalId;
    const handleStopPointerScroll=()=> {
       clearInterval(intervalId)
    };
    const isScrollAllowed=(position, height)=>{
        const lowerLimit=height*0.2;
        const upperlimit=height-lowerLimit;

        if((position >= lowerLimit) && (position <= upperlimit)){
            return true;
        }
        return false;
    }
    const handleMouseMove=(e,scrollNodeHeight)=>{
        if(isScrollAllowed(e.layerY, scrollNodeHeight)){
            const SPEED_MULTIPLIER=1;
            const upperLimitPercentage=80;
            const lowerLimitPercentage=100- upperLimitPercentage;
            const mouseEnterPercentage=(e.clientX/e.view.innerWidth)*100;
            handleStopPointerScroll();
            const handleImageTransition=(limit)=>{
                intervalId=setInterval(()=>alterConstantValue((mouseEnterPercentage - limit)*SPEED_MULTIPLIER),1);
            }
         
            if(mouseEnterPercentage>upperLimitPercentage){
               handleImageTransition(upperLimitPercentage);
            }
            else if(mouseEnterPercentage<lowerLimitPercentage){
                handleImageTransition(lowerLimitPercentage)
            }
        }
        else{
            handleStopPointerScroll();
        }
    }
    
    return {handleMouseMove, handleStopPointerScroll};
    
    }

const DAMPING_CONSTANT=3;
const transformTransition=(currentTransition)=>{
    if(currentTransition<10){
        return currentTransition - (1 - 1/currentTransition);
    }
    return currentTransition-DAMPING_CONSTANT;
}

export const touchHandler=(alterConstantValue)=>{
    let firstTouch={x:null, y:null};
    let previousTouch={x:null, y:null};
    let startTime=0;
    let intervalId;
    let currentTransition;
    let direction=1;

    const handleDamping=()=>{
        
        if(currentTransition<=1){
            clearInterval(intervalId);
        }

        alterConstantValue(currentTransition * direction);
        currentTransition=transformTransition(currentTransition);


    }
    const handleTouchMove=(e)=>{

        const currentCoordinate={x:e.changedTouches[0].screenX, y:e.changedTouches[0].screenY};

        if(Math.abs(previousTouch.x -currentCoordinate.x)> Math.abs(previousTouch.y -currentCoordinate.y)){
            e.preventDefault();
           alterConstantValue((previousTouch.x - currentCoordinate.x)*3);
        }

        previousTouch=currentCoordinate;
    }

    const handleTouchStart=(e)=>{
        startTime=e.timeStamp;
        clearInterval(intervalId);
        firstTouch={x:e.touches[0].screenX, y:e.touches[0].screenY};
        previousTouch=firstTouch;
    };

    const handleTouchEnd=(e)=>{
        const lastTouch={x:e.changedTouches[0].screenX, y:e.changedTouches[0].screenY};
        const timeDuration=e.timeStamp - startTime;
        const speed= (lastTouch.x - firstTouch.x)/timeDuration;
        direction=speed<0?1:-1;
        currentTransition=Math.abs(speed*40);

        intervalId=setInterval(handleDamping,1);
        

        
    }

    return {handleTouchMove, handleTouchStart, handleTouchEnd};
 }