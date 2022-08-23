import { useEffect, useState } from 'react'
import * as S from './styles'
import { Todo } from './Todo'

interface Todo {
  id: number
  name: string
  isChecked: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [name, setName] = useState('')

  const numberOfDoneTodos = todos.reduce((acc, cur) => {
    return cur.isChecked ? acc + 1 : acc
  },0)

  const createTodo = () => {
    if(!!name){
      setTodos([...todos, {name, isChecked: false, id: todos.length+1}])
      setName('')
    }
  }

  const toggleTodo = (id: number) => {
    const index = todos.findIndex(todo => todo.id === id)
    const copyOfTodos = [...todos]
    const todo = copyOfTodos[index]
    todo.isChecked = !todo.isChecked
    setTodos(copyOfTodos)
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <S.Container>
      <S.Header>
        TODO
      </S.Header>
      <S.Content>
        <S.InputContainer>
          <input 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
            placeholder='Adicione uma nova tarefa'
          />
          <button onClick={createTodo}>Criar</button>
        </S.InputContainer>
        <S.TodoList>
          <div>
            <strong>Tarefas criadas - <S.Badge>{todos.length}</S.Badge></strong>
            <strong>Concluídas - <S.Badge>{numberOfDoneTodos}/{todos.length}</S.Badge></strong>
          </div>
          <ul>
            {todos.map(todo => (
              <Todo 
                key={todo.id} 
                id={todo.id} 
                isChecked={todo.isChecked} 
                name={todo.name} 
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            ))}
          </ul>
        </S.TodoList>
      </S.Content>
    </S.Container>
  )
}

export default App
