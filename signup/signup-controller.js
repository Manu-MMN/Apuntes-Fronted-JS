
export function signupController(form) {

    // 1- obtener los datos del formulario
    form.addEventListener("submit", () => {
        const userEmailElement = form.querySelector("#user-mail");
        const passwordElement = form.querySelector("#password");
        const passwordConfirmElement = form.querySelector("#password-confirm");

        const userEmail = userEmailElement.value;
        const password = passwordElement.value;
        const passwordConfirm = passwordConfirmElement.value;

        const errors = [];

        // 2- validarlos
        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!emailRegExp.test(userEmail)) {
            errors.push('formato de mail incorrecto')
        }

        if (password !== passwordConfirm) {
            errors.push('las passwords no son iguales')
        }

        for (const error of errors) {
            // mostrar notificaciones
        }
    })
      // 3- consumir sparrest para crear el usuario
}