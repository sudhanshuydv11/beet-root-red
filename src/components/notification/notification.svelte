<script>
import "./notification-style.scss";
export let render=()=>{};

const MESSAGE_TYPES_CLASS={
    info:'msg-info',
    success:'msg-success',
    error: "msg-danger",
    warning: 'msg-warning'
}

// data
let messageText='';
var clear;
var msgDuration = 4000;
let messageClass='';


// cache DOM

// render message

function timer(){
    clearTimeout(clear);
    clear = setTimeout(function(){
        hide();
    }, msgDuration)
}

function hide(){
    messageClass='';
};

render=(message, displayText)=>{

    hide();
    messageText=displayText;
    messageClass=`${MESSAGE_TYPES_CLASS[message]} active`;
    timer();
}

</script>

<!-- message -->
<div class="msg animate slide-in-down {messageClass}">{messageText}</div>
<!-- end message -->