import React, { useState, useEffect } from 'react';

function TodoWidget() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('portfolio-todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('portfolio-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="card">
      <h3>Course Assignment Milestones</h3>
      <p style={{fontSize: '0.9rem', color: '#888'}}>Demonstrates custom isolated state mechanics + localStorage parsing.</p>
      <form onSubmit={addTodo} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a milestone target..."
        />
        <button type="submit">Add</button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        {todos.length === 0 ? <p>No items added yet!</p> : todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoWidget;