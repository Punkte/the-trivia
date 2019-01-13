 import styled from 'styled-components'
 export const CategoryForm = styled.form`
  & input {
    height: 32px;
    width: 100%;
    outline-color: none;
    outline-width: 0;
    border-left: none;
    border-top: none;
    border-right: none;
    
    & input:focus {
      border-bottom-color: black;
    }
  }
  `

 export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* box-shadow: 1px 7px 20px 0px #4a4a4a; */
  & div {
    margin-left: 15px;
    margin-right: 15px;

  }
  & button {
    margin: 0px 15px 0 ;
  }
  `

 export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  padding: 15px;
  box-shadow: 1px 7px 20px 0px #4a4a4a;

  background-color: #FFF;
  & button {
    margin-left: auto;
    margin-right: auto;
  }
`

 export const CategoryContainer = styled.div`
  margin-top: 15vh;
  & h1 {
    text-align: center;
  }
`

 export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 15px;
  background-color: #fff;

  a {
    display: block;
    

    text-decoration: none;
    color: black;

  }
`

 export const StyledLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;

  & h2 {
    margin-left: 15px;
  }
`