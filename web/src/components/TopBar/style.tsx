import styled from "styled-components";



export const TopBarStyled = styled.nav`
    /* background-color: red; */
    height: 63px;
    border-bottom: 1px solid #5f6368;
    padding: 0 15px;

    div.grid {
        display: grid;
        grid-template-columns: 250px auto 250px;
        height: 100%;

        div.div_icon {
            width: 42px;
            font-size: 28px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .sutil {
            opacity: .6;
            font-size: 24px !important;
        }

        div.col_1 {
            display: flex;
            align-items: center;

            img {
                margin-left: 8px;
                height: 40px;
            }

            h1 {
                margin: 8px;
            }
        }
        div.col_2 {
            display: flex;
            align-items: center;
            padding-left: 8px;

            div#div_search {
                display: flex;
                align-items: center;
                width: 100%;
                max-width: 720px;
                height: 47px;
                border-radius: 8px;
                border: none;
                background-color: rgb(82 83 85);

                div.div_search_icon {
                    font-size: 20px;
                    height: 100%;
                    color: white;
                    width: 55px;
                    justify-content: center;
                    display: flex;
                    align-items: center;
                }

                input#input_search {
                    background-color: rgba(0,0,0,0);
                    border: none;
                    height: 30px;
                    font-size: 15.5px;
                    font-family: 'Open Sans', sans-serif;
                    
                    ::placeholder {
                        color: #ececec;
                        font-weight: 500;
                    }
                }
            }
        }
        div.col_3 {
            display: flex;
            align-items: center;
            justify-content: end;

            img#profile_photo {
                border-radius: 50%;
                height: 32px;
                border: 3px solid #414141;
                margin: 5px 12px 0px 36px;
            }
        }
    }
`;
