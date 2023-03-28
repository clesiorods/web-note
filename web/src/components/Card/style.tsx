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
        transition: .2s all;
        min-height: 80px;
        box-shadow: 0px 1px 10px rgba(0,0,0,.2);
        position: relative;

        .div_check {
            margin: -6px -7px;
            background-color: #ffffff;
            opacity: 0;
            color: black;
            transition: .3s all;
            height: 20px;
            width: 20px;
            border-radius: 10px;
            font-size: 19px;
            font-weight: 600;
            position: absolute;
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            h4 {
                margin: 12px 16px 8px;
                font-size: 17px;
                font-weight: 500;
            }

            .pin_icon {
                padding: 12px 12px 0px 0px;
                font-size: 24px;
                opacity: 0;
                transition: .3s all;
            }
        }

        .card-body {
            margin: 8px 16px 6px;
            font-size: 16px;
        }

        .div_icons {
            opacity: 0;
            display: flex;
            transition: .3s all;
            justify-content: space-between;
            padding: 0px 8px 8px;
            font-size: 18px;
            /* color: #cacaca; */

            .icon_wrapper {
                /* cursor: pointer; */
                display: flex;
                align-items: center;
                justify-content: center;                
                height: 32px;
                width: 32px;
                border-radius: 15px;
                opacity: .8;

                :hover {
                    background-color: #ffffff14;
                    /* color: white; */
                }
            }
        } 

        svg {
            cursor: pointer;
        }

        :hover {
            box-shadow: 0px 2px 6px #0c0c0c;
            /* margin-top: -1px;
            margin-bottom: 17px;
            margin-left: -1px;
            margin-right: -1px;
            width: 242px; */


            .div_check {
                opacity: .9;
            }

            .div_icons {
                opacity: 1;
            }

            .pin_icon {
                opacity: .6;
            }
        }

    }
`;
