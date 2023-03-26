import styled from "styled-components";


export const CardStyled = styled.div`

    color: #d7dae2;
    margin-left: 8px;
    margin-right: 8px;
    
    .card {
        width: 240px;
        margin-bottom: 16px;
        border: 1px solid #5f6368;
        border-radius: 8px;
        color: #e8eaed;
        transition: .3s all;
        /* padding: 26px; */
        min-height: 100px;
        box-shadow: 0px 1px 10px rgba(0,0,0,.2);
        
        .card-header {
            h4 {
                margin: 16px 16px 8px;
                font-size: 18px;
                font-weight: 500;
            }
        }


        .card-body {
        }

    }
`;
