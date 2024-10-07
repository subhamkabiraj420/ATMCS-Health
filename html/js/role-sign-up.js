document.getElementById('signup-role').addEventListener('change', function() {
    const selectedRole = this.value;

    // Hide all role-specific fields initially
    document.getElementById('patient-fields').style.display = 'none';
    document.getElementById('doctor-fields').style.display = 'none';
    document.getElementById('admin-fields').style.display = 'none';

    // Display relevant fields based on the role selected
    if (selectedRole === 'patient') {
        document.getElementById('patient-fields').style.display = 'block';
    } else if (selectedRole === 'doctor') {
        document.getElementById('doctor-fields').style.display = 'block';
    } else if (selectedRole === 'admin') {
        document.getElementById('admin-fields').style.display = 'block';
    }
});

document.getElementById('role-signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('signup-role').value;
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const phone = document.getElementById('signup-phone').value;
    const dob = document.getElementById('signup-dob').value;
    const gender = document.getElementById('signup-gender').value;

    // Capture additional fields based on the selected role
    let additionalData = {};

    if (role === 'patient') {
        additionalData = {
            insurance: document.getElementById('signup-insurance').value,
            medicalHistory: document.getElementById('signup-medical-history').value
        };
    } else if (role === 'doctor') {
        additionalData = {
            license: document.getElementById('signup-license').value,
            specialty: document.getElementById('signup-specialty').value,
            hospital: document.getElementById('signup-hospital').value
        };
    } else if (role === 'admin') {
        additionalData = {
            adminCode: document.getElementById('signup-admin-code').value
        };
    }

    const signupData = {
        role,
        name,
        email,
        password,
        phone,
        dob,
        gender,
        ...additionalData
    };

    console.log('Signup Data:', signupData);

    // You can add code here to send the data to the server (e.g., using fetch or axios)
});
