function renderHabits() {
    habitList.innerHTML = '';
    habits.forEach((habit, index) => {
        const div = document.createElement('div');
        div.className = 'habit-item';
        div.innerHTML = `
            <span class="habit-text ${habit.completed ? 'completed' : ''}">${habit.text}</span>
            <div class="controls">
                <button class="check-btn" onclick="toggle(${index})">Complete</button>
                <button class="delete-btn" onclick="del(${index})">Remove</button>
            </div>
        `;
        habitList.appendChild(div);
    });
    localStorage.setItem('myHabits', JSON.stringify(habits));
}