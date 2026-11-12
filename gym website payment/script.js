document.getElementById("proceedPayment").addEventListener("click", function () {
    const message = document.getElementById("paymentMessage");

    message.textContent = "Demo Payment Successful! No real money was charged.";
    message.style.color = "#39ff14";
    message.style.marginTop = "15px";
});