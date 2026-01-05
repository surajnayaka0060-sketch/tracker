let transactions = JSON.parse(localStorage.getItem('walletData')) || [];
let activeType = 'income';

// Initialize Chart
const ctx = document.getElementById('donutChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: { datasets: [{ data: [0, 0], backgroundColor: ['#00f2ff', '#ff4d4d'], borderWidth: 0 }] },
    options: { cutout: '75%', plugins: { legend: { display: false } } }
});

function openModal(type) {
    activeType = type;
    document.getElementById('modalTitle').innerText = type === 'income' ? 'ADD INCOME' : 'ADD EXPENSE';
    document.getElementById('modal').style.display = 'block';
}

function closeModal() { document.getElementById('modal').style.display = 'none'; }

function saveEntry() {
    const name = document.getElementById('itemName').value;
    const amount = parseFloat(document.getElementById('itemAmount').value);
    if (name && amount) {
        transactions.push({ name, amount, type: activeType, date: new Date().toLocaleDateString() });
        localStorage.setItem('walletData', JSON.stringify(transactions));
        updateUI();
        closeModal();
    }
}

function updateUI() {
    const list = document.getElementById('transactionList');
    list.innerHTML = '';
    let inc = 0, exp = 0;

    transactions.forEach((t, i) => {
        if (t.type === 'income') inc += t.amount; else exp += t.amount;
        list.innerHTML += `
            <div class="transaction-item" style="display:flex; justify-content:space-between; padding:12px; border-bottom:1px solid #1a1f2b; cursor:pointer;" onclick="deleteT(${i})">
                <span>${t.name}<br><small style="color:#5c6370">${t.date}</small></span>
                <span style="color:${t.type === 'income' ? '#00f2ff' : '#ff4d4d'}">${t.type === 'income' ? '+' : '-'}₹${t.amount}</span>
            </div>`;
    });

    document.getElementById('totalBalance').innerText = `₹${inc - exp}`;
    document.getElementById('monthlyIncome').innerText = `₹${inc}`;
    document.getElementById('monthlyExpense').innerText = `₹${exp}`;
    document.getElementById('availableBalance').innerText = `₹${inc - exp}`;

    myChart.data.datasets[0].data = [inc, exp];
    myChart.update();
}

function deleteT(index) {
    transactions.splice(index, 1);
    localStorage.setItem('walletData', JSON.stringify(transactions));
    updateUI();
}

updateUI();