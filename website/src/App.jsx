import React from 'react';
import './App.css'; // Asegúrate de importar el archivo CSS

const LoginPage = () => {
    const togglePasswordVisibility = () => {
        const passwordInput = document.getElementById('password');
        const toggleButton = document.getElementById('togglePassword');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleButton.textContent = '👁️';
        } else {
            passwordInput.type = 'password';
            toggleButton.textContent = 'ojo';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        console.log('Formulario enviado');
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <div className="password-container">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            id="togglePassword"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            ojo
                        </button>
                    </div>
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;