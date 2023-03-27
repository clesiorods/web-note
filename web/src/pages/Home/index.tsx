import { useEffect, useState, useRef } from "react";
import { BiCheckSquare, BiImageAlt, BiPaint, BiPin } from "react-icons/bi";
import { Card } from "../../components/Card";
import { MainFrame } from "../../components/MainFrame";
import { InputNewNote, MainGrid } from "./style";


export function Home() {

    const arrayGuia = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const cards = [
        { number: 1, title: 'Título do card', text: 'Lembra de beber água todos os dias', color: '' },
        { number: 2, title: 'Título do card', text: `aaaa`, color: '' },
        { number: 3, title: 'Título do card', text: `aaaa`, color: '#5c2b29' },
        { number: 4, title: 'Título do card', text: 'Era uma casa muito engraçada não tinha teto não tinha nada ', color: '' },
        {
            number: 5, title: 'Título do card', text: `TAEE11 - Taesa S.A.
        ITSA4 - Itausa
        BBAS3 - Banco do Brasil S.A.
        BRADESPAR`, color: '#1e3a5f'
        },
        { number: 6, title: 'Título do card', text: `aaaa`, color: '' },
        { number: 7, title: 'Título do card', text: `aaaa`, color: '' },
        { number: 8, title: 'Título do card', text: `aaaa`, color: '#635d19' },
        { number: 9, title: 'Título do card', text: `aaaa`, color: '' },
        { number: 10, title: 'Título do card', text: `aaaa`, color: '' },
        { number: 11, title: 'Título do card', text: `aaaa`, color: '' },
        { number: 12, title: 'Título do card', text: `aaaa`, color: '#3c3f43' },
        { number: 13, title: 'Título do card', text: `aaaa`, color: '' },
        { number: 14, title: 'Título do card', text: `aaaa`, color: '' },
        { number: 15, title: 'Título do card', text: `aaaa`, color: '#3c3f43' },
        { number: 16, title: 'Título do card', text: `aaaa`, color: '' },
        { number: 18, title: 'Título do card', text: `aaaa`, color: '' },
        { number: 19, title: 'Título do card', text: `aaaa`, color: '' }
    ];

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

    let cont = -1;
    arrayGuia.forEach((element, index) => {
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
                                <div key={`col_${index}`}>
                                    {
                                        coluna.map((el, i) => {
                                            return (
                                                <Card key={`key_${i}`} height={1} color={cards[el].color} >
                                                    <div className="card-header">
                                                        <h4>Card {cards[el].title}</h4>
                                                        <div className="pin_icon">
                                                            <BiPin />
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        {cards[el].text}
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