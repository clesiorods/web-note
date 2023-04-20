import styled from "styled-components";



export const Nav = styled.nav`
    width: 350px;
    font-size: 14px;
    padding-top: 8px;

    ul {
        padding: 0px;
        margin: 0px;

        li {
            height: 48px;
            padding-left: 12px;
            display: flex;
            align-items: center;
            border-radius: 0px 24px 24px 0px;

            .sutil {
                opacity: .6;
                font-size: 24px !important;
            }

            div.icon {
                margin-top: 4px;
                width: 48px;
                font-size: 26px;
                vertical-align: middle;
                text-align: center;
            }

            span.label {
                font-family: 'Open Sans', sans-serif;
                font-weight: 500;
                text-decoration: none;
                padding-left: 20px;
                margin-bottom: 2px;
            }
        }

        li:hover {
            background-color: #27282b;
        }

        li.active {
            background-color: #41331c;
        }
    }
    
`;
