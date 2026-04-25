import { useState } from 'react'
import './App.css' 

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const novaTarefa = {
      id: Date.now(), 
      text: inputValue
    };

    setTarefas([...tarefas, novaTarefa]);
    setInputValue(''); 
  };

  const removerTarefa = (id) => {
    const novaLista = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novaLista);
  };

  return (
    <main id="center">
      <header>
        <h1>Minha Lista de Tarefas</h1>
      </header>

      <section className="hero">
        <form onSubmit={adicionarTarefa} style={{ display: 'flex', gap: '8px', width: '100%' }}>
          <input
            type="text"
            className="counter"
            placeholder="O que precisa ser feito?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="counter" style={{ width: 'auto', cursor: 'pointer' }}>
            Adicionar
          </button>
        </form>
      </section>

      <section id="next-steps">
        <div className="ticks"></div>
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <span>{tarefa.text}</span>
              <button onClick={() => removerTarefa(tarefa.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
        {tarefas.length === 0 && <p style={{ textAlign: 'center', opacity: 0.5 }}>Sua lista está vazia.</p>}
      </section>

      <div id="spacer"></div>
    </main>
  );
}

export default App;