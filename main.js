//Getting the modal element from html
var modal = document.getElementById('simpleModal');
// Get the Open Modal Button
var modalBtn = document.getElementById('modalBtn');
// Get the close Button
var closeBtn= document.getElementsByClassName('closeBtn')[0];

// Lets create some events
// Listen for open clickBtn event
modalBtn.addEventListener('click',openModal);

//Listen for Close ClickBtn
closeBtn.addEventListener('click',closeModal);

// Listen for outside the Click
window.addEventListener('click',outsideClick);


// Function to open modal
function openModal(){
    modal.style.display='block';
}

// Function to close modal
function closeModal(){
    modal.style.display='none';
}
// Function to close modal when clicked outside
function outsideClick(e){
    if(e.target == modal){
        modal.style.display='none';
    }
    
}
