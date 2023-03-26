import { useEffect, useState, useRef } from "react";
import { BiCheckSquare, BiImageAlt, BiPaint } from "react-icons/bi";
import { Card } from "../../components/Card";
import { MainFrame } from "../../components/MainFrame";
import { InputNewNote, MainGrid } from "./style";


export function Home() {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    let cont = -1;
    let colunas: any[][] = [];
    const [larguraDiv, setLarguraDiv] = useState<number>(0);
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize(): void {
            if (divRef.current) {
                const largura = divRef.current.offsetWidth;
                setLarguraDiv(largura);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [divRef]);

    const countCols = Math.trunc(larguraDiv / 250);
    console.log(countCols);

    cards.forEach((element, index) => {

        cont++;
        if (cont >= countCols) {
            cont = 0;
        }

        if (colunas[cont] !== undefined) {
            colunas[cont] = [...colunas[cont], element];
        } else {
            colunas[cont] = [element];
        }
    })

    // console.log(colunas);


    return (
        <MainFrame>
            <div ref={divRef}>
                <InputNewNote>
                    <div id="div_search" style={{ justifyContent: 'space-between' }}>
                        <div id="input_wrapper" style={{ width: '100%' }}>
                            <input id="input_search" placeholder="Criar uma nota..." type="text" />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className="div_search_icon">
                                <BiCheckSquare />
                            </div>
                            <div className="div_search_icon">
                                <BiPaint />
                            </div>
                            <div className="div_search_icon">
                                <BiImageAlt />
                            </div>
                        </div>
                    </div>
                </InputNewNote>

                <MainGrid>
                    {
                        colunas.map((coluna, index) => {
                            return (
                                <div>
                                    {
                                        coluna.map((el, i) => {
                                            return (
                                                <Card height={1} >
                                                    <div className="card-header">
                                                        <h4>Card {el}, <br></br> linha {index}</h4>
                                                    </div>
                                                    <div className="card-body">
                                                    </div>
                                                </Card>
                                            );
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </MainGrid>
            </div>
        </MainFrame>
    );
}