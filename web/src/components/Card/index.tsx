import { CardStyled } from "./style";

type CardProps = {
    children: React.ReactNode;
    height: number;
}


export function Card(props: CardProps) {



    return (
        <CardStyled>
            <div className="card">
                {props.children}
            </div>
        </CardStyled>
    );
}