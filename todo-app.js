// タスクをリストに追加
function createTodoList(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <p class="todo">${task}</p>
        <button class="delete">削除</button>
    `;
    document.getElementById('todo-list').appendChild(li);
}

// 追加ボタンのクリックイベント
document.getElementById('add-todo').addEventListener('click', function() {
    const task = document.getElementById('add-new-todo').value.trim();
    if (task !== '') {
        createTodoList(task);
        document.getElementById('add-new-todo').value = '';
    }
});

// 削除ボタンのクリックイベント
document.getElementById('todo-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// その他の機能は必要に応じて実装してください
