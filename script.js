:root {
    --bg: #f8fafc;
    --card: #ffffff;
    --primary: #6366f1;
    --text: #1e293b;
    --border: #e2e8f0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg);
    color: var(--text);
    display: flex;
    justify-content: center;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 500px;
    background: var(--card);
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

header h1 {
    margin-bottom: 1.5rem;
    text-align: center;
    font-weight: 700;
}

.input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 2rem;
}

input {
    flex: 1;
    padding: 12px;
    border: 2px solid var(--border);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s;
}

input:focus {
    border-color: var(--primary);
}

button {
    padding: 10px 20px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
}

ul {
    list-style: none;
    padding: 0;
}

.habit-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid var(--border);
    animation: fadeIn 0.3s ease;
}

.habit-item:last-child {
    border-bottom: none;
}

.habit-text {
    flex: 1;
    font-size: 1.1rem;
}

.completed {
    text-decoration: line-through;
    color: #94a3b8;
}

.controls {
    display: flex;
    gap: 10px;
}

.check-btn {
    background: #22c55e;
    padding: 5px 10px;
}

.delete-btn {
    background: #ef4444;
    padding: 5px 10px;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}