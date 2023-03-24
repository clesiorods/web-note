import { BiCog, BiGridAlt, BiMenu, BiRevision, BiSearch } from "react-icons/bi";
import { TopBarStyled } from "./style";
import Logo from './../../assets/keep_logo.png';
import ProfilePhoto from './../../assets/user.jpg';


export function TopBar() {
    return (
        <TopBarStyled>
            <div className="grid">
                <div className="col_1">
                    <div className="div_icon">
                        <BiMenu />
                    </div>
                        <img className='main_logo' src={Logo} alt="logo" />
                        <h1>Keep</h1>
                </div>
                <div className="col_2">
                    <div id="div_search">
                        <div className="div_search_icon">
                            <BiSearch />
                        </div>
                        <input id="input_search" placeholder="Pesquisar" type="text" />
                    </div>
                </div>
                <div className="col_3">
                    <div className="div_icon sutil">
                        <BiRevision />
                    </div>
                    <div className="div_icon sutil">
                        <BiGridAlt />
                    </div>
                    <div className="div_icon sutil">
                        <BiCog />
                    </div>
                    <div className="">
                        <img id="profile_photo" src={ProfilePhoto} alt="" />
                    </div>
                </div>
            </div>
        </TopBarStyled>
    );
}