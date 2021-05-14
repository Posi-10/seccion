$(document).ready(() => {
    $('#btn_iniciar').click(() => {
        numero = Math.floor((Math.random() * 99) + 1)
        $.ajax({
            type: 'POST',
            data: 'numero_seccion=' + numero,
            url: 'control/control_home.php',
            success: (r) => {
                console.log(r);
                window.location = 'inicio';
            }
        });
    });
});