$(document).ready(() => {

    const SwalColors = {
        rojo: "rgba(250, 0, 0, 0.45)",
        verde: "rgba(0, 250, 0, 0.45)",
        amarillo: "rgba(255, 233, 0, 0.45)",
        azul: "#0000FF59"
    };

    function SwalOverlayColor(color) {
        setTimeout(() => {
            $(".swal-overlay").css({ "background-color": SwalColors[color] });
        }, 10);
    }

    /*$('#btn_informacion').click(() => {
        $.ajax({
            type: 'POST',
            data: false,
            url: 'control/control_info.php',
            success: (r) => {
                SwalOverlayColor("azul");
                swal({
                    title: "Informacion",
                    text: `tu numero de usuario es ${r}`,
                    icon: "info",
                    button: true,
                });
            }
        });
    });*/

    $('#btn_salir').click(() => {
        $.ajax({
            type: 'POST',
            url: "control/control_salir.php",
            success: (r) => {
                window.location = 'home';
            }
        });
    });
});