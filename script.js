let transactions = JSON.parse(localStorage.getItem('walletData')) || [];
let activeMode = 'income';

// Chart Initialization
const ctx = document.getElementById('donutChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [1, 1], // Placeholders
            backgroundColor: ['#10b981', '#ef4444'],
            borderWidth: 0,
            hoverOffset: 10
        }]
    },
    options: { cutout: '80%', plugins: { legend: { display: false } } }
});

function openModal(mode) {
    activeMode = mode;
    const title = document.getElementById('modalTitle');
    const btn = document.getElementById('modalSubmit');
    
    title.innerText = mode === 'income' ? '+ New Income' : '— New Expense';
    title.style.color = mode === 'income' ? '#10b981' : '#ef4444';
    btn.style.backgroundColor = mode === 'income' ? '#10b981' : '#ef4444';
    btn.innerText = mode === 'income' ? 'Add Income' : 'Add Expense';
    
    document.getElementById('modal').style.display = 'block';
}

function closeModal() { document.getElementById('modal').style.display = 'none'; }

function saveEntry() {
    const amount = parseFloat(document.getElementById('itemAmount').value);
    const category = document.getElementById('itemCategory').value;
    const date = document.getElementById('itemDate').value;
    
    if (amount && category) {
        transactions.push({ amount, category, date, type: activeMode });
        localStorage.setItem('walletData', JSON.stringify(transactions));
        updateDashboard();
        closeModal();
    }
}

function updateDashboard() {
    const list = document.getElementById('transactionList');
    list.innerHTML = '';
    let inc = 0, exp = 0;

    transactions.forEach((t, i) => {
        if (t.type === 'income') inc += t.amount; else exp += t.amount;
        
        list.innerHTML += `
            <div class="transaction-item" onclick="deleteT(${i})">
                <div>
                    <strong>${t.category}</strong><br>
                    <small style="color:#5c6370">${t.date}</small>
                </div>
                <div style="font-weight:bold; color:${t.type === 'income' ? '#10b981' : '#ef4444'}">
                    ${t.type === 'income' ? '+' : '-'}₹${t.amount}
                </div>
            </div>`;
    });

    document.getElementById('monthlyIncome').innerText = `₹${inc}`;
    document.getElementById('monthlyExpense').innerText = `₹${exp}`;
    document.getElementById('totalBalance').innerText = `₹${inc - exp}`;
    document.getElementById('availableBalance').innerText = `₹${inc - exp}`;

    myChart.data.datasets[0].data = [inc || 1, exp || 1];
    myChart.update();
}

function deleteT(index) {
    transactions.splice(index, 1);
    localStorage.setItem('walletData', JSON.stringify(transactions));
    updateDashboard();
}

updateDashboard();