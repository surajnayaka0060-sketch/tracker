const ctx = document.getElementById('donut');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Income', 'Expense'],
    datasets: [{
      data: [2300, 1800],
      backgroundColor: ['#22c55e', '#ef4444'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    }
  }
});
