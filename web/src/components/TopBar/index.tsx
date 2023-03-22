import { TopBarStyled } from "./style";


export function TopBar() {
    return (
        <TopBarStyled>
            <div className="grid">
                <div className="col_1">aaaaaa</div>
                <div className="col_2">
                    <input type="text" id="input_search" />
                </div>
                <div className="col_3">bbbbb</div>
            </div>
        </TopBarStyled>
    );
}