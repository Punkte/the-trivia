import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 15px;

    background-color: #fff;

    h1 {
        margin: 0;
    }

`

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & div {
        margin-left: 15px;
        margin-right: 15px;
    }
    & button {
        margin: 0px 15px 0 ;
    }
`