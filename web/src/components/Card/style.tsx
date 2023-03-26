import styled from "styled-components";


export const CardStyled = styled.div`

    color: #e8eaed;
    margin-left: 8px;
    margin-right: 8px;
    
    .card {
        background-color: ${e => e.color ? e.color : 'none'};
        width: 240px;
        margin-bottom: 16px;
        border: ${e => e.color ? `1px solid ${e.color}` : '1px solid #5f6368'};
        border-radius: 8px;
        transition: .3s all;
        min-height: 80px;
        box-shadow: 0px 1px 10px rgba(0,0,0,.2);
        
        .card-header {
            h4 {
                margin: 16px 16px 8px;
                font-size: 18px;
                font-weight: 500;
            }
        }

        .card-body {
            margin: 8px 16px 16px;
            font-size: 16px;
        }

    }
`;
