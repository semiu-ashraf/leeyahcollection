function openModal() {
    document.getElementById('modal').style.visibility = 'visible';
    document.getElementById('modal').style.transition = '0.5s ease-in';
}

function closeModal() {
    document.getElementById('modal').style.visibility = 'hidden';
    document.getElementById('modal').style.transition = '0.5s';
    console.log('clicked');
}

document.getElementsByClassName('media-links').addEventListener('click', function() {
    document.getElementById('modal').style.visibility = 'hidden';
})

// document.getElementById('modal)')