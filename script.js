document.getElementById("formatButton").addEventListener("click", function () {
    const phoneInput = document.getElementById("phoneInput").value;
    const outputElement = document.getElementById("output");

    try {
        const formattedNumber = formatPhoneNumber(phoneInput);
        outputElement.textContent = formattedNumber;
    } catch (error) {
        outputElement.textContent = error.message;
        outputElement.style.color = "red";
    }
});

function formatPhoneNumber(phoneNumber) {
    if (typeof phoneNumber !== 'string' || phoneNumber.length !== 10 || !/^\d{10}$/.test(phoneNumber)) {
        throw new Error('Invalid phone number format. Please provide a 10-digit string.');
    }

    let areaCode = phoneNumber.slice(0, 3);
    let centralOfficeCode = phoneNumber.slice(3, 6);
    let lineNumber = phoneNumber.slice(6, 10);

    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}
