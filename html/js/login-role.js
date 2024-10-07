document.getElementById('role-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const role = document.getElementById('login-role').value;
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const loginData = {
        role,      // Role selected
        email,
        password
    };

    console.log('Login Data:', loginData);

    // Add your logic to handle authentication (e.g., using fetch or axios)
});
