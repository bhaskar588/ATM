let balance = 10000.0;

const formSection = document.getElementById('form-section');
const amountInput = document.getElementById('amount');
const actionBtn = document.getElementById('actionBtn');
const messageDiv = document.getElementById('message');

function showWithdraw() {
    formSection.style.display = 'block';
    amountInput.value = '';
    actionBtn.textContent = 'Withdraw';
    actionBtn.onclick = () => {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            showMessage('⚠ Please enter a valid amount.');
            return;
        }
        if (amount > balance) {
            showMessage('⚠ Insufficient Balance!');
        } else {
            balance -= amount;
            showMessage(`✅ Withdrawal Successful. Remaining Balance: ₹${balance.toFixed(2)}`);
        }
    };
}

function showDeposit() {
    formSection.style.display = 'block';
    amountInput.value = '';
    actionBtn.textContent = 'Deposit';
    actionBtn.onclick = () => {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            showMessage('⚠ Please enter a valid amount.');
            return;
        }
        balance += amount;
        showMessage(`✅ Deposit Successful. Updated Balance: ₹${balance.toFixed(2)}`);
    };
}

function checkBalance() {
    formSection.style.display = 'none';
    showMessage(`💰 Your Current Balance: ₹${balance.toFixed(2)}`);
}

function exitATM() {
    formSection.style.display = 'none';
    showMessage('🙏 Thank you for banking with SBI. Goodbye!');
}

function showMessage(msg) {
    messageDiv.textContent = msg;
}
