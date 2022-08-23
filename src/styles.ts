import styled, {createGlobalStyle} from 'styled-components'

export const Container = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 200px;
  width: 100%;
  background: #0D0D0D;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 736px;
  margin: 0px auto;
  margin-top: -20px;
`

export const InputContainer = styled.div`
  display: flex;

  input {
    border: 0;
    outline: 0;
    background-color: #262626;
    border-radius: 4px;
    margin-right: 8px;
    width: 100%;
    padding: 12px;
  }

  button{
    border: 0;
    border-radius: 8px;
    background-color: #1E6F9F;
    padding: 16px;
    color: #F2F2F2;
  }
`

export const TodoList = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  >div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    strong{
      color: #4EA8DE;
      display: flex;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`

export const Badge = styled.div`
margin-left: 4px;
  background-color: #262626;
  padding: 4px 8px;
  border-radius: 12px;
  color: #FFF;
  font-size: 14px;
`