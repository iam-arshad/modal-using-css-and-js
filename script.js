var openModelBtn = document.querySelector('#openModal');
var modal = document.querySelector('#modal');
var closeModalBtn = document.querySelector('#closeModal');

// display the modal if open "modalbutton" is clicked
openModelBtn.addEventListener('click',(e)=>
{
    modal.style.display='block';
})


// hide the modal if close button is clicked
closeModalBtn.addEventListener('click',(e)=>{
    modal.style.display='none';
})

//hide the modal if clicked anywhere outside the modal
window.addEventListener('click',(e)=>{
    if(e.target == modal)
    {
        modal.style.display='none';
    }
})