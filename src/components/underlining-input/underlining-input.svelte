<script>
    import "./underlining-input.scss";
    export let placeholder;
    export let inputValue ='';
    let isFocused = false;
</script>

<input 
    class="underline-input" 
    placeholder={placeholder} 
    on:focus={() => isFocused = true} 
    on:blur={() => isFocused = false}
    on:input={(e) => inputValue=e.target.value} 
/>
<div class="underline-container">
    <span class="underline-input-focus--before"></span>
    <span class="underline-input-focus{isFocused ? "--after" : "--hidden"}"></span>
</div>
