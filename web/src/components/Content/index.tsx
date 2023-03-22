import React from "react";
import { Footer } from "../Footer/Footer";
import { Div } from "./style";

type ContentProps = {
    children: React.ReactNode;
}



export function Content(props: ContentProps) {
    return (
        <Div>
            <div className="content">
                {props.children}
                <Footer />
            </div>
        </Div>
    );
}