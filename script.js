let income = 2200;
let expenses = [
  { name: "food", value: 50 },
  { name: "darma roller", value: 300 },
  { name: "sleeper", value: 500 },
  { name: "seed", value: 100 }
];

const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expenses");
const balanceEl = document.getElementById("balance");
const availableEl = document.getElementById("available");
const listEl = document.getElementById("expense-list");

function updateUI() {
  const totalExpenses = expenses.reduce((a, b) => a + b.value, 0);
  const balance = income - totalExpenses;

  incomeEl.textContent = `₹${income}`;
  expenseEl.textContent = `₹${totalExpenses}`;
  balanceEl.textContent = `₹${balance}`;
  availableEl.textContent = `₹${balance}`;

  listEl.innerHTML = "";
  expenses.forEach(e => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<span>${e.name}</span><span>-₹${e.value}</span>`;
    listEl.appendChild(div);
  });

  drawDonut();
}

function addIncome() {
  const val = prompt("Enter income amount:");
  if (!val) return;
  income += parseInt(val);
  updateUI();
}

function addExpense() {
  const name = prompt("Expense name:");
  const val = prompt("Amount:");
  if (!name || !val) return;
  expenses.push({ name, value: parseInt(val) });
  updateUI();
}

function drawDonut() {
  const canvas = document.getElementById("donut");
  const ctx = canvas.getContext("2d");
  const total = expenses.reduce((a, b) => a + b.value, 0);

  let start = -0.5 * Math.PI;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  expenses.forEach(e => {
    const slice = (e.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 24;
    ctx.arc(110, 110, 80, start, start + slice);
    ctx.stroke();
    start += slice;
  });
}

updateUI();
