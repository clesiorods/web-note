import { Nav } from './style';
import { BiBell, BiBulb } from "react-icons/bi";


export function SideBar() {

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
                    <div className="icon">
                        <BiBell />
                    </div>
                    <span className='label'>Lembretes</span>
                </li>
            </ul>
        </Nav>
    );
}