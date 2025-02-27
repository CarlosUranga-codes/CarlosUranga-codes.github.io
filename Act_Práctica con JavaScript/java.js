document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        // Credenciales de acceso
        const validEmail = "usuario@example.com";
        const validPassword = "123456";
        
        if (email === validEmail && password === validPassword) {
            alert("Inicio de sesión exitoso");
            window.location.href = "indexhtml.html"; // Redirigir al index después de hacer clic en registrar
        } else {
            alert("Acceso denegado: correo o contraseña incorrectos");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }
    });
    
    document.getElementById("registerButton").addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (email === "usuario@example.com" && password === "123456") {
            alert("Registro exitoso");
            window.location.href = "indexhtml.html";
        } else {
            alert("Debe ingresar credenciales válidas antes de registrarse");
        }
    });
});
