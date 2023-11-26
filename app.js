document.addEventListener("DOMContentLoaded", function() {
    let video = document.getElementById("botonvideo");

    video.addEventListener("play", function() {
        console.log('El video ha comenzado a reproducirse');
    });

    video.addEventListener("seeking", function() {
        console.log('Se está buscando una nueva posición en el video');
        console.log('Tiempo actual:', this.currentTime);
    });

    video.addEventListener("ended", function() {
        console.log('El video ha terminado');
        alert("¡Se terminó el video hommie!");
        let decision = confirm("¿Quieres ver de nuevo crazy man?");
        console.log(decision);
        if (decision) {
            video.play();
        }
    });


    let colores = ["blue", "red", "green", "yellow", "purple", "orange", "pink", "brown", "gray", "cyan"];
    let indexColor = 0;

    let temporizadorColor = setInterval(function() {
        ponerColorBody(colores[indexColor]);
        indexColor = (indexColor + 1) % colores.length;
    }, 5000);


    setInterval(function() {
        console.log('Se está viendo el video');
    }, 1000);

    setTimeout(function() {
        clearInterval(temporizadorColor);
    }, 30000);

    function ponerColorBody(color) {
        document.body.style.backgroundColor = color;
    }
});
