import styled from "styled-components";


export const CardStyled = styled.div`

    padding: 2px;
    color: #d7dae2;
    width: 240px;
    position: absolute;
    transition: all.2s all;

    .card {
        margin-bottom: 12px;
        border: 1px solid #5f6368;
        border-radius: 8px;
        color: #e8eaed;
        transition: .3s all;
        padding: 12px;
        min-height: 100px;
        box-shadow: 0px 1px 10px rgba(0,0,0,.2);
        
        .card-header {
            margin: 12px;
            margin-bottom: 0px;
            display: flex;
            justify-content: space-between;
            background: none;
            border: none;

            h4 {
                margin-top: -12px;
                margin-left: -8px;
                font-size: 18px;
                font-weight: 500;
            }

            span {
                font-size: 12px;
                margin-right: -8px;
            }
        }


        .card-body {
            margin: 16px;
            margin-top: 0px;
            height: 100%;
        }

    }

    .chart_div {
        margin: -20px;
        margin-left: -40px;
        margin-top: -50px;
        margin-bottom: -30px;
    }

`;
