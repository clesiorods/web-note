import styled from "styled-components";

export const MainGrid = styled.div`
    margin: 10px 10px 30px 6px;
    display: block;
    width: 100%;
    text-align: center;
    position: relative;
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 12px; */
    min-height: 200vh;
`;


export const InputNewNote = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px auto 30px;

    div#div_search {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 570px;
        height: 44px;
        border-radius: 8px;
        border: 1px solid #5f6368;
        box-shadow: 0px 3px 5px #131313;
        padding: 0px 5px 0px 15px;
        color: #d6d6d6;
        
        input#input_search {
            background-color: rgba(0,0,0,0);
            border: none;
            width: 100%;
            height: 30px;
            font-size: 15.5px;
            font-family: 'Open Sans', sans-serif;
            
            ::placeholder {
                color: #cacaca;
                font-weight: 500;
            }
        }
        
        div.div_search_icon {
            font-size: 24px;
            height: 100%;
            width: 50px;
            justify-content: center;
            display: flex;
            align-items: center;
            opacity: .7;
        }

    }

`;