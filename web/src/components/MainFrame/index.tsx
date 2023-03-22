import { Content } from "../Content";
import { SideBar } from "../SideBar";
import { Div } from "./style";


type FrameProps = {
    children: React.ReactNode;
};



export function MainFrame(props: FrameProps) {
    return (
        <Div>
            <SideBar />
            <Content>
                {props.children}
            </Content>
        </Div>
    );
}