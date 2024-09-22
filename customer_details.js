document.addEventListener('DOMContentLoaded', function () {
    const formElements = [
        'fullName', 'email', 'phone', 'address', 'city', 'state', 'zip', 'country',
        'cardName', 'cardNumber', 'expDate', 'cvv'
    ];

    formElements.forEach(function (element) {
        document.getElementById(element).addEventListener('input', updateSummary);
    });

    function updateSummary() {
        document.getElementById('item').textContent = document.getElementById('item').value;
        document.getElementById('summaryFullName').textContent = document.getElementById('fullName').value;
        document.getElementById('summaryEmail').textContent = document.getElementById('email').value;
        document.getElementById('summaryPhone').textContent = document.getElementById('phone').value;
        document.getElementById('summaryAddress').textContent = document.getElementById('address').value;
        document.getElementById('summaryCity').textContent = document.getElementById('city').value;
        document.getElementById('summaryState').textContent = document.getElementById('state').value;
        document.getElementById('summaryZip').textContent = document.getElementById('zip').value;
        document.getElementById('summaryCountry').textContent = document.getElementById('country').value;

        document.getElementById('summaryCardName').textContent = document.getElementById('cardName').value;
        document.getElementById('summaryCardNumber').textContent = document.getElementById('cardNumber').value.replace(/\d(?=\d{4})/g, "*");
        document.getElementById('summaryExpDate').textContent = document.getElementById('expDate').value;
        document.getElementById('summaryCVV').textContent = document.getElementById('cvv').value.replace(/\d/g, "*");
    }
});
//https://script.google.com/macros/s/AKfycbwuaItKPBPZZE0ZEXHs-A0tyWgV-6SRc6aoVINKtifsbwk3qxm_rI-eELoLtzbkHj4WBA/exec