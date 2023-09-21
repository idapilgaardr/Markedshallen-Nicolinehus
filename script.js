const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close');

/*----- Vis popup når siden indlæses -----*/
window.addEventListener('load', () => {
    popup.style.display = 'block';
});

/*----- popup lukkes når man trykker på kryds -----*/
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

/*----- Vis billede med vinkemand -----*/
const vinkemandImage = document.getElementById('vinkemand');

vinkemandImage.onload = function () {
    const imageWidth = vinkemandImage.width;
    const imageHeight = vinkemandImage.height;

/*----- Hent popup -----*/
    const popup = document.getElementById('popup');

    popup.style.width = imageWidth + 'px';
    popup.style.height = imageHeight + 'px';

/*----- Popup kommer efter billedet er loaded -----*/
    popup.style.display = 'block';
};

const button1 = document.getElementById('yes');

/*----- Tilføj klik-funktion -----*/
button1.addEventListener('click', function() {

    /*----- Åbner ny side i samme vindue -----*/
    window.open('side2.html', '_self');
});

const button2 = document.getElementById('no');

/*----- Tilføj klik-funktion -----*/
button2.addEventListener('click', function() {
const popup = document.getElementById('popup')
popup.style.display = 'none'
});