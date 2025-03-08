<!-- Contenedor del formulario flotante -->
<div class="dark-background" id="dark-background">
    <div class="container-form">
        <!-- Formulario de inicio de sesión -->
        <section class="section section__form--log-in visible">
            <form action="" class="log-in">
                <h1 class="tittle">Log in</h1>
                <input class="input" placeholder="username" type="text" class="username" id="username-log-in">
                <input class="input" placeholder="password" type="password" class="password" id="password-log-in">
                <a href="#" class="link">Forgot your password?</a>
                <button class="btn btn__form" id="boton-log-in">Get into</button>
                <button class="btn btn__form--change" type="button" onclick="changeForm('signup')">
                    Register
                </button>
            </form>
        </section>

        <!-- Formulario de registro (oculto por defecto) -->
        <section class="section section__formulario--sign-up">
            <form action="" class="sign-up">
                <h1 class="tittles">Register</h1>
                <input class="input" placeholder="Ingrese su nombre" type="text" class="nombre" id="nombre-sign-up" required>
                <input class="input" placeholder="Ingrese su apellido" type="text" class="apellido" id="apellido-sign-up" required>
                <input class="input" placeholder="Ingrese su correo electrónico" type="email" class="correo" id="correo-sign-up" required>
                <input class="input" placeholder="Contraseña" type="password" name="contraseña" class="contraseña" id="contraseña-sign-up" required>
                <label for="contraseña" class="texto" id="labelContraseñaSignIn">
                The password must contain at least 1 uppercase, number, special characters (@#$%^&¿?).
                </label>
                <input class="input" placeholder="Confirme su contraseña" type="password" name="confirmarContraseña" class="contraseña" id="confirmarContraseña-sign-up" required>
                <label for="confirmarContraseña" class="texto" id="labelConfirmarContraseñaSignIn">
                Passwords must match
                </label>
                <a href="#" class="link">Forgot your password?</a>
                <button class="btn btn__form" id="boton-sign-up">Register</button>
                <button class="btn btn__form--change" type="button" onclick="changeForm('login')">
                    Log in
                </button>
            </form>
        </section>
    </div>
</div>