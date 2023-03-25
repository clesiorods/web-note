import { Nav } from './style';
import { BiArchive, BiBell, BiBulb, BiPencil, BiTag, BiTrash } from "react-icons/bi";


export function SideBar() {

    const categorias = [1, 2, 3, 4, 5];

    return (
        <Nav>
            <ul>
                <li className='active'>
                    <div className="icon">
                        <BiBulb />
                    </div>
                    <span className='label'>Notas</span>
                </li>
                <li>
                    <div className="icon sutil">
                        <BiBell />
                    </div>
                    <span className='label'>Lembretes</span>
                </li>

                {categorias.map((el, index) => {
                    return (
                        <li key={index} >
                            <div className="icon sutil" style={{rotate: '180deg'}}>
                                <BiTag />
                            </div>
                            <span className='label'>Categoria</span>
                        </li>
                    )
                })}

                <li>
                    <div className="icon sutil">
                        <BiPencil />
                    </div>
                    <span className='label'>Editar marcadores</span>
                </li>
                <li>
                    <div className="icon sutil">
                        <BiArchive />
                    </div>
                    <span className='label'>Arquivados</span>
                </li>
                <li>
                    <div className="icon sutil">
                        <BiTrash />
                    </div>
                    <span className='label'>Lixeira</span>
                </li>
            </ul>
        </Nav>
    );
}