import styled from "styled-components";



export const NavBar = styled.nav`
    position: sticky;
    top: 0px;
    display: flex;
    z-index: 10000;
    width: 100%;
    /* padding: 20px; */
    /* margin-bottom: 24px; */
    
    div.navbar {
        height: 53px;
        background-color: #7367f0;
        border-radius: 6px;
        margin: 0px 2px;
        width: 100%;
        padding: 10px 16px;
        box-shadow: 0px -30px 42px #101628;

        div.side_01 {
            margin-top: -8px;
        }

        div.stile_menu {
            margin-top: 4px;
            display: none;
        }

        div {
            div {
                svg {
                    margin: 4px 6px;
                }
            }
            div.profile {
                display: flex;
                img {
                    margin: -4px 5px 0px 5px;
                    height: 40px;
                    width: 40px;
                    border-radius: 20px;
                }

                div {
                    display: block;
                    margin: 0px 6px;
                    h5 {
                        font-size: 14px;
                        margin-bottom: 2px;
                        text-align: right;
                    }
                    h6 {
                        font-size: 11.4px;
                        text-align: right;
                    }
                }
          }
        }
    }


    @media screen and (max-width: 800px) {

        padding: 0px;
        margin-bottom: 55px;

        div.navbar {

            top: 0;
            position: fixed;
            margin: 0px -26px;
            border-radius: 2px;

            div.stile_menu {
                display: block;
            }

            div {
                div.div_icon {
                    display: none;
                }

                div {
                    div.div_names {
                        display: none !important;
                    }
                }
            }
        }
    }


    @media screen and (min-width: 1400px) {
        div.navbar {
            height: 58px;
            padding-top: 13px;
        }
    }
`;
