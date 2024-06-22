import { useState } from 'react'

const TodoForm = () => {
const [value, setValue] = useState("")
const [category, setCategory] = useState("")

  return (
    <div>
     <h2>Criar tarefa:</h2>
     <form>
        <input type="text" placeholder='Digite o título' />
        <select>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
     </form>
    </div>
  )
}

export default TodoForm
