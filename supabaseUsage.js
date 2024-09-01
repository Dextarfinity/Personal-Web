import { supabase } from './supabaseClient.js'; // Import supabase client

document.getElementById('sendButton').onclick = async function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate inputs
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Disable the button to prevent multiple submissions
    const sendButton = document.getElementById('sendButton');
    sendButton.disabled = true;

    // Add the pulse animation class
    sendButton.classList.add('pulse');

    // Insert data into the emails table
    const { data, error } = await supabase
        .from('emails')
        .insert([
            { name: name, email: email, message: message }
        ]);

    // Handle the response
    if (error) {
        console.error('Error inserting data:', error);
        alert('There was an error sending your message.');
        sendButton.disabled = false; // Re-enable the button if there was an error
        sendButton.classList.remove('pulse');
    } else {
        console.log('Message sent:', data);
        
        // Update button text and icon
        sendButton.innerHTML = 'Sent <i class="uil uil-check"></i>';
        
        // Add the sent class for background and icon animation
        sendButton.classList.remove('pulse');
        sendButton.classList.add('sent');

        // Clear the form after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        // Re-enable the button after some delay if needed
        setTimeout(() => {
            sendButton.disabled = false;
            sendButton.innerHTML = 'Send <i class="uil uil-message"></i>';
            sendButton.classList.remove('sent');
        }, 3000); // Re-enable and reset after 3 seconds
    }
};

