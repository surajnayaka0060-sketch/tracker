const ctx = document.getElementById('donut');
const tooltip = document.getElementById('tooltip');

const data = {
  labels: ['Expenses', 'Remaining'],
  datasets: [{
    data: [28500, 16500],
    backgroundColor: ['#ef4444', '#22d3ee'],
    borderWidth: 0,
    hoverOffset: 12
  }]
};

new Chart(ctx, {
  type: 'doughnut',
  data,
  options: {
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: (context) => {
          const tooltipModel = context.tooltip;
          if (!tooltipModel.opacity) {
            tooltip.style.opacity = 0;
            return;
          }

          const value = tooltipModel.dataPoints[0].raw;
          const label = tooltipModel.dataPoints[0].label;

          tooltip.innerHTML = `${label}: ₹${value}`;
          tooltip.style.opacity = 1;
          tooltip.style.left = tooltipModel.caretX + 'px';
          tooltip.style.top = tooltipModel.caretY + 'px';
        }
      }
    },
    animation: {
      animateRotate: true,
      duration: 1200,
      easing: 'easeOutQuart'
    }
  }
});
