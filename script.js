// MODAL
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const dateInput = document.getElementById('dateInput');

function openModal(type) {
  modal.style.display = 'flex';
  modalTitle.textContent = type === 'income' ? 'Add Income' : 'Add Expense';
  dateInput.valueAsDate = new Date();
}

function closeModal() {
  modal.style.display = 'none';
}

// CHART (EXPENSE ONLY)
const ctx = document.getElementById('donut');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Expense'],
    datasets: [{
      data: [1800],
      backgroundColor: ['#ef4444'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '78%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    animation: {
      duration: 900,
      easing: 'easeOutQuart'
    }
  }
});
