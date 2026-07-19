import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Hello, PC-LABO!</h1>
      <p>Vite + Reactの開発環境構築、完了。</p>

      <button type="button" onClick={() => setCount((count) => count + 1)}>
        カウント: {count}
      </button>

      <p className="hint">
        <code>src/App.jsx</code> を編集して保存すると、画面が自動的に更新される（HMR）。
      </p>
    </div>
  )
}

export default App
