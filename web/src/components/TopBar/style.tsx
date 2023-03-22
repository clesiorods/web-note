import styled from "styled-components";



export const TopBarStyled = styled.nav`
    /* background-color: red; */
    height: 63px;
    border-bottom: 1px solid #5f6368;
    padding-left: 8px;
    padding-right: 8px;

    div.grid {
        display: grid;
        grid-template-columns: 250px auto 250px;
        height: 100%;

        div.col_1 {
            display: flex;
            align-items: center;
        }
        div.col_2 {
            display: flex;
            align-items: center;
            input#input_search {
                width: 100%;
                max-width: 720px;
                height: 46px;
                border-radius: 8px;
                border: none;
                background-color: rgb(82 83 85);
            }
        }
        div.col_3 {
            display: flex;
            align-items: center;
            justify-content: end;
        }
    }
`;
