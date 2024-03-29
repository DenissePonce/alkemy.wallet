const loginArea = document.getElementById('login-area'),
    dashboard = document.getElementById('dashboard'),
    deposito = document.getElementById('deposito'),
    transferir = document.getElementById('transferir'),
    total = document.getElementById('total'),
    depositoInput = document.getElementById('deposito-input'),
    transferirInput = document.getElementById('transferir-input'),
    depositoBtn = document.getElementById('deposito-btn'),
    transferirBtn = document.getElementById('transferir-btn'),
    submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click', () => {
    loginArea.style.display = 'none';
    dashboard.classList.remove('d-none');
})

depositoBtn.addEventListener('click', () => {
    const value = depositoInput.value;
    const depositoValue = Number(deposito.innerText) + Number(value);
    const totalValue = Number(total.innerText) + Number(value);
    deposito.innerText = depositoValue;
    total.innerText = totalValue;
    depositoInput.value = '';
})


transferirBtn.addEventListener('click', () => {
    const value = transferirInput.value;
    if (Number(value) === 0) {
        alert("Ingresa un monto");
    } else if (Number(value) > Number(total.innerText)) {
        alert("Saldo insuficiente");
    } else {
        const totalValue = Number(total.innerText) - Number(value);
        const transferirValue = Number(transferir.innerText) + Number(value);
        transferir.innerText = transferirValue;
        total.innerText = totalValue;
        transferirInput.value = '';
    }
})