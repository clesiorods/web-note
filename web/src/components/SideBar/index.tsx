import { NavLink } from 'react-router-dom';
import { Nav } from './style';


export function SideBar() {

    return (
        <Nav>
            <div className="nav nav_header navbar-nav flex-row justify-content-between">
                <div className='div_logo'>
                    <span className="brand-logo">
                        <img className='main_logo' src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/static/media/logo.f03f8d4d.svg" alt="logo" />
                    </span>
                    <h2 className="brand-text mb-0">Solutions</h2>
                </div>
                <div id="pin_icon">
                    Ícone
                </div>
            </div>

            <div className="div_menu" >
                <ul className="">

                    <li>
                        <span className='menu_section'>
                            VENDAS
                        </span>
                    </li>

                    <NavLink data-bs-toggle="" to="/resumo" aria-expanded="true" aria-controls="sidebarDashboards" className=" ">
                        <li className="">
                            Ícone
                            <span className=" nav_text"> Resumo </span>
                        </li>
                    </NavLink>

                    <NavLink data-bs-toggle="" to="/financeiro" aria-expanded="false" aria-controls="sidebarCrm" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> Financeiro </span>
                        </li>
                    </NavLink>

                    <NavLink to="/kanban" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> Kanban </span>
                        </li>
                    </NavLink>

                    <NavLink to="/clientes" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> Clientes </span>
                        </li>
                    </NavLink>

                    <NavLink to="/crm" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> Gráficos </span>
                        </li>
                    </NavLink>


                    <NavLink to="calendar" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> Calendário </span>
                        </li>
                    </NavLink>

                    <NavLink to="apps-chat.html" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> Chat </span>
                        </li>
                    </NavLink>

                    <li>
                        <span className='menu_section'>
                            APPS
                        </span>
                    </li>

                    <NavLink data-bs-toggle="" to="/sidebarCrm" aria-expanded="false" aria-controls="sidebarCrm" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> CRM </span>
                        </li>
                    </NavLink>

                    <NavLink data-bs-toggle="" to="/sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> E-commerce </span>
                        </li>
                    </NavLink>

                    <NavLink data-bs-toggle="" to="/sidebarTables" aria-expanded="false" aria-controls="sidebarTables" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> Tabelas </span>
                        </li>
                    </NavLink>

                    <NavLink data-bs-toggle="" to="/sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> Mapas </span>
                        </li>
                    </NavLink>

                    <NavLink data-bs-toggle="" to="/sidebarMultiLevel" aria-expanded="false" aria-controls="sidebarMultiLevel" className="">
                        <li className="">
                            Ícone
                            <span className='nav_text'> Multinível </span>
                        </li>
                    </NavLink>
                </ul>
            </div>

        </Nav>
    );
}