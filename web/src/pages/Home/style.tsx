import styled from "styled-components";

export const MainGrid = styled.div`
    margin:32px 0px;
    justify-content: center;
    display: flex;
    width: 100%;
`;


export const InputNewNote = styled.div`
    display: flex;
    justify-content: center;
    margin: 14px 8px;

    div#div_search {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 574px;
        height: 44px;
        border-radius: 8px;
        border: 1px solid #5f6368;
        box-shadow: 0px 2px 6px #0c0c0c;
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