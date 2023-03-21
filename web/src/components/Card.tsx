import styled from "styled-components";

type CardProps = {
    children: React.ReactNode;
    height: number;
}


export function Card(props: CardProps) {


    const CardStyled = styled.div`

        padding: 2px;
        color: #d7dae2;

        .card {
            /* padding: 16px 16px; */
            margin-top: 24px;
            min-height: ${(188 * props.height) + ((props.height - 1) * 28)}px;
            border: none;
            border-radius: 5px;
            background-color: #283046;
            transition: .3s all;
            
            .card-header {
                margin: 16px;
                margin-bottom: 0px;
                display: flex;
                justify-content: space-between;
                background: none;
                border: none;

                h4 {
                    margin-top: -2px;
                    margin-left: -8px;
                    font-size: 18px;
                    color: #b9bdc7;
                }

                span {
                    color: #949aa9;
                    font-size: 12px;
                    margin-right: -8px;
                }
            }
    
    
            .card-body {
                margin: 16px;
                margin-top: 0px;
                height: 100%;
                /* background-color: rgba(150, 156, 166, 0.35); */
            }
    
        }

        .chart_div {
            margin: -20px;
            margin-left: -40px;
            margin-top: -50px;
            margin-bottom: -30px;
        }

        @media screen and (max-width: 800px) {
            div.card {
                margin: 8px -14px;
            }
        }

        @media screen and (min-width: 1400px) {
            padding: 2px;
            color: #d7dae2;

            .card {
                /* padding: 22px 26px; */
                .card-header {
                    margin: 22px 26px 0px;
                    h4 {
                        margin-top: -2px;
                        margin-left: -8px;
                        font-size: 20px;
                        color: #b9bdc7;
                    }

                    span {
                        color: #949aa9;
                        font-size: 14px;
                        margin-right: -8px;
                    }
                }
        
        
                .card-body {
                    margin: 0px 26px 22px;
                    height: 100%;
                    /* background-color: rgba(150, 156, 166, 0.35); */
                }
        
            }

            .chart_div {
                margin: -20px;
                margin-left: -40px;
                margin-top: -50px;
                margin-bottom: -30px;
            }
        }


    `;


    return (
        <CardStyled>
            <div className="card">
                {props.children}
            </div>
        </CardStyled>
    );
}