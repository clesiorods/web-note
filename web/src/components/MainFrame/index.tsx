import { Content } from "../Content";
import { SideBar } from "../SideBar";
import { TopBar } from "../TopBar";
import { Div } from "./style";


type FrameProps = {
    children: React.ReactNode;
};



export function MainFrame(props: FrameProps) {
    return (
        <Div className="main-frame">
            <TopBar />
            <div style={{display: 'flex'}} >
                <SideBar />
                <Content>
                    {props.children}
                </Content>
            </div>
        </Div>
    );
}