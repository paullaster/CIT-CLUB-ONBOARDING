//This files has the front end logic for event page
let newEventBtn = document.getElementById('eventBtn');
newEventBtn.addEventListener('click', newEvent);
//This function loads the new event page
function newEvent(e){
    e.preventDefault();
    window.location.href="../html/newevent.html";
}

let eventThumbnail = document.getElementById('event_thumbnail');
eventThumbnail.addEventListener('onchange',onImageLoad)

function onImageLoad(e){
    e.preventDefault();
    let event_thumbnail_output = document.getElementById('event_thumbnail_output');
    event_thumbnail_output.src = URL.createObjectURL(e.target.files[0]);
    console.log(event_thumbnail_output.src);
}