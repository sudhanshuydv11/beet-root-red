<script>
    export let triggerInView;
    export let index;
    let node;

    const observer=new IntersectionObserver(([entry])=>{
        if(entry.isIntersecting){
           const y= entry.boundingClientRect.top + window.scrollY+ 1;
            triggerInView(index);
        }
    },{threshold:0.5});
    $:{
        if(node){
        observer.observe(node);
        }
    }
</script>
<div bind:this={node}>
    <slot/>
</div>