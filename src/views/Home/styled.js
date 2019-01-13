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

export const ListContainer = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 15vh auto 0;
    width: 80%;
`

export const ListItem = styled.div`
    width: 200px;
    height: 120px;
    margin-top: 15px;
    
    border: solid 2px;
    border-color: ${props => props.played ? '#999': '#FFF'};
    background-color: ${props => props.played ? '#999': '#FFF'};
    border-radius: 8px;
    
    color: #555;
    font-weight: bold;
    transition: 0.3s ease;
    
    
    & a, & span {
        display: block;
        height: 100%;
        width: 100%;
        padding-top: 25%;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        color: inherit;
    }

    &:hover {
        transform: ${props => !props.played ? 'scale(1.05)' : ''};
    }
`