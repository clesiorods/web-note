import { useRef } from "react";
import { CardStyled } from "./style";

type CardProps = {
    children: React.ReactNode;
    height: number;
}


export function Card(props: CardProps) {

    const h1Ref = useRef<HTMLHeadingElement>(null);
    const height = h1Ref.current?.offsetHeight;



    return (
        <CardStyled heigth={height}>
            <div ref={h1Ref} className="card">
                {props.children}
            </div>
        </CardStyled>
    );
}