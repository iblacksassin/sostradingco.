let slides = document.querySelectorAll('.reviews .flex .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

//toast notification

const toast = document.getElementById('toast');

//Array of messages to cycle through 
const messages = [
    "Luis John just deposited $3,300 to our platform!",
    "Francic Muler from  just deposited $2,790 to our platform!",
    "Sara Banks just deposited $5,200 to our platform!",
    "Daniel Cain just deposited $2,190 to our platform!",
    "Kakashi Black just deposited $310 to our platform!",
    "Kira Courtney made a withdrawal of $7,992",
    "Lambart King made a withdrawal of $19,280",
    "Stephanie Harris made a withdrawal of $1,012",
    "Anderson Shipman made a withdrawal of $9,982",
    "Nora Noeway just deposited $9,330 to our platform!",
    "Wally Weberman mad a withdrawal of $200",
    "Sandra Newman just deposited $11,090 to our platform!",
    "Thai Sun made a withdrawal of $476",
    "Odenga White Lion just deposited $13,900 to our platform!",
    "Zhan Quan made a withrawal of $121",
    "Aemond Thargerian just deposited $21,800 to our platform!",
    "Timoty Chidera just made a withdrawal of $533"
];
let messageIndex = 0;

//Function to show toast with changing text
function showToast() {
   toast.textContent = messages[messageIndex]; //set toast text to current message
   toast.classList.add('show');

   //Move to next message (cycles through the array)
   messageIndex = (messageIndex + 1) % messages.length;

   setTimeout (() => {
    toast.classList.remove('show');
   }, 3000); // Toast visible for 3secs
}

//Infinite loop to show and hide toast
function toastLoop() {
    showToast();
    setTimeout(toastLoop, 5000); //Toast reappears every 4 secs (1sec after it disappears)
}
//start the loop
toastLoop()
