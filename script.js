function generateOtp() {
    // Generate a 4-digit OTP
    let otp = Math.floor(Math.random() * 10000);

    // Ensure OTP is 4 digits
    if (otp >= 1000 && otp < 10000) {
        // Update the OTP displayed on the webpage
        document.getElementById("otp").textContent = otp;
    } else {
        // If OTP is less than 1000, regenerate
        generateOtp();
    }
}