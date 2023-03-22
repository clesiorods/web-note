import React from "react";
import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar";
import { Div } from "./style";

type ContentProps = {
    children: React.ReactNode;
}



export function Content(props: ContentProps) {
    return (
        <Div>
            <div className="content">
                <TopBar />
                {props.children}
                <Footer />
            </div>
        </Div>
    );
}