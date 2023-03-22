import styled from "styled-components";



export const Nav = styled.nav`
    width: 420px;
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

            div.icon {
                margin-top: 4px;
                width: 48px;
                font-size: 24px;
                vertical-align: middle;
                text-align: center;
            }

            span.label {
                font-weight: 600;
                text-decoration: none;
                padding-left: 20px;
                margin-bottom: 2px;
            }
        }

        li.active {
            background-color: #41331c;
            border-radius: 0px 24px 24px 0px;
        }
    }
    
`;
