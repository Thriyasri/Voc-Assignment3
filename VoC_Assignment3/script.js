document.addEventListener("DOMContentLoaded", function () {
  const verifyBtn = document.getElementById("verifyBtn");
  const emailInput = document.getElementById("emailInput");
  const resultDiv = document.getElementById("result");

  // ONLY these emails are valid
  const validEmails = [
    "thriyasrireddy@gmail.com",
    "admin@vaultofcodes.com"
  ];

  // Validate email format on input
  emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    verifyBtn.disabled = !isValid;

    if (!isValid && email.length > 0) {
      resultDiv.innerHTML = "⚠️ Invalid email format";
      resultDiv.className = "warning";
    } else {
      resultDiv.innerHTML = "";
      resultDiv.className = "";
    }
  });

  // When user clicks verify
  verifyBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    resultDiv.innerHTML = "⏳ Verifying...";
    resultDiv.className = "verifying";
    verifyBtn.disabled = true;

    setTimeout(() => {
      verifyBtn.disabled = false;

      if (validEmails.includes(email)) {
        resultDiv.innerHTML = "✅ Email Verified Successfully!";
        resultDiv.className = "success";
      } else {
        resultDiv.innerHTML = "❌ No records found for the provided ID.";
        resultDiv.className = "error";
      }
    }, 1500);
  });
});
