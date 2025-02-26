<script>
    import UnderliningInput from "../underlining-input/underlining-input";
    import "./home-contact.scss";
    import ButtonWithBorder from "../buttons/button-with-border/button-with-border.svelte";
    import Notification from "../notification/notification.svelte";

    let messageText='';
    let render;
    let firstName='';
    let lastName='';
    let contactNumber='';
    let email='';
    let message=''

    const validateEmail = (email) =>
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const validatePhoneNumber = (number) =>
            /^\d{10}$/.test(number);

    const isAnyFieldEmpty=(...fields)=>{
        return fields.some((field)=> field.length === 0);
    }

    const validateFormFields= async ()=>{
        if (isAnyFieldEmpty(firstName,lastName,contactNumber,email,message)) {
                throw 'Please fill in all fields.';

            }

            // Validate phone number
            if (!validatePhoneNumber(contactNumber)) {
                throw "Invalid phone number. Must be 10 digits.";

            }

            // Validate email address
            if (!validateEmail(email)) {
                throw "Invalid email address.";
            }
    }
    const sendMail=()=>{
        fetch('https://www.jrdeftech.com/notification_service.php', {
         method:'POST',
         headers: {
        "Content-Type": "application/json"
        },
         body:JSON.stringify({
            firstName,
            lastName,
            contact: contactNumber,
            email,
            message
         })
        })
        .then(()=> render('success', 'Message Sent'))
        .catch(() => {
            render('error', "Error Occured. Please try again after sometime")
        })
    }
    const handleClick=()=>{
        validateFormFields()
        .then(sendMail)
        .catch( (error) => render('warning', error) )
    }


</script>
<div class="home-contact-container">
        <h1 class="home-contact-heading">
        GET  IN TOUCH
        </h1>
        <p class="home-contact-description">
        Please leave your contact details and we will get back to you shortly
        </p>

    <div class="home-contact-form">
    <div class="contact-row">
    <div class="row-content">
    <UnderliningInput bind:inputValue={firstName} placeholder="FIRST NAME"/>
    </div>
    <div class="row-content">
    <UnderliningInput bind:inputValue={lastName} placeholder="LAST NAME"/>
    </div>
    </div>
    <div class="contact-row">
    <div class="row-content">
        <UnderliningInput bind:inputValue={contactNumber} placeholder="CONTACT NO."/>
    </div>
    <div class="row-content">
        <UnderliningInput bind:inputValue={email} placeholder="EMAIL"/>
    </div>
    </div>
    <div class="contact-row">
    <div class="row-content">
        <UnderliningInput bind:inputValue={message} placeholder="YOUR MESSAGE"/>
    </div>
    </div>
    </div>
    <div class="home-contact-spacer">&nbsp</div>

    <ButtonWithBorder buttonClass={"home-contact-button"} buttonName={"SEND A MESSAGE"} onClick={handleClick} />

    <Notification bind:render={render}/>
</div>

