import { CardStyled } from "./style";

type CardProps = {
    children: React.ReactNode;
    height: number;
    color: string;
}


export function Card(props: CardProps) {

    return (
        <CardStyled color={props.color}>
            <div className="card">
                {props.children}
            </div>
        </CardStyled>
    );
}