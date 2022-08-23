import { FiTrash } from 'react-icons/fi'

import styled from "styled-components"

const Container = styled.li`
  list-style: none;
  background-color: #262626;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px 16px;

  input {
    -moz-appearance:none;
    -webkit-appearance:none;
    -o-appearance:none;

    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: 1px solid #1E6F9F;
    margin-right: 8px;

    &:checked {
      background-color: #1E6F9F;
    }
  }
`

const Text = styled.p<{isChecked: boolean}>`
  color: ${props => props.isChecked ? '#808080' : '#F2F2F2'};
  text-decoration: ${props => props.isChecked ? 'line-through' : 'none'};
`

interface TodoProps {
  name: string
  id: number
  isChecked: boolean
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

export const Todo = ({name, id, isChecked, toggleTodo, removeTodo}: TodoProps) => {
  return(
    <Container>
      <input type="checkbox" checked={isChecked} onChange={() => toggleTodo(id)}/>
      <Text isChecked={isChecked}>{name}</Text>
      <FiTrash style={{marginLeft: 'auto'}} onClick={()=>removeTodo(id)}/>
    </Container>
  )
}