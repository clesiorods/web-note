import { useEffect, useState, useRef } from "react";
import { BiCheckSquare, BiImageAlt, BiPaint } from "react-icons/bi";
import { Card } from "../../components/Card";
import { MainFrame } from "../../components/MainFrame";
import { InputNewNote, MainGrid } from "./style";


export function Home() {

    const cards = [
        { pos: '1', teste: 'Teste de texto mais longo para alterar o tamaho da div dfffffffffff ffffff ffffffffff ffffffff' },
        { pos: '2', teste: 'aaaaaaa' },
        { pos: '3', teste: 'aaaaaaa' },
        { pos: '4', teste: 'aaaaaaa' },
        { pos: '5', teste: 'aaaaaaa' },
        { pos: '6', teste: 'aaaaaaa' },
        { pos: '7', teste: 'aaaaaaa' },
        { pos: '8', teste: 'aaaaaaa' },
        { pos: '9', teste: 'aaaaaaa' },
        { pos: '10', teste: 'aaaaaaa' },
        { pos: '11', teste: 'aaaaaaa' },
        { pos: '12', teste: 'aaaaaaa' },
        { pos: '13', teste: 'aaaaaaa' },
        { pos: '14', teste: 'aaaaaaa' },
        { pos: '15', teste: 'aaaaaaa' },
        { pos: '16', teste: 'aaaaaaa' },
        { pos: '18', teste: 'aaaaaaa' },
        { pos: '19', teste: 'aaaaaaa' }
    ];




    let linha = 0;
    let cont = -1;
    let horizontalPosition = 0;
    let verticalPosition = 0;
    let heightColumns:any[] = [];

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

    const countCols = larguraDiv / 320;


    return (
        <MainFrame>

            <InputNewNote ref={divRef}>
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
                    cards.map((element, index) => {

                        cont++;
                        if (cont >= countCols) {
                            linha++;
                            cont = 0;
                        }

                        if(heightColumns[cont] !== undefined) {
                            heightColumns[cont] += 142;
                        } else {
                            heightColumns[cont] = 0;
                        }

                        horizontalPosition = cont * 256;
                        // verticalPosition = verticalPosition + 142;

                        return (
                            <div key={index} style={{ transform: `translate(${horizontalPosition}px, ${heightColumns[cont]}px)` }}>
                                <Card >
                                    <div className="card-header">
                                        <h4>Card {index + 1}, <br></br> linha {linha}</h4>
                                        <p>{element.teste}</p>
                                    </div>
                                    <div className="card-body">
                                    </div>
                                </Card>
                            </div>
                        )

                    })}


            </MainGrid>
        </MainFrame>
    );
}