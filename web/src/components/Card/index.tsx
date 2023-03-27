import { BiArchiveIn, BiBellPlus, BiCheck, BiDotsVerticalRounded, BiImageAdd, BiPalette, BiUserPlus } from "react-icons/bi";
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
                <div className="div_check">
                    <BiCheck/>
                </div>

                {props.children}

                <div className="div_icons">
                    <div className="icon_wrapper">
                        <BiBellPlus />
                    </div>
                    <div className="icon_wrapper">
                        <BiUserPlus />
                    </div>
                    <div className="icon_wrapper">
                        <BiPalette />
                    </div>
                    <div className="icon_wrapper">
                        <BiImageAdd />
                    </div>
                    <div className="icon_wrapper">
                        <BiArchiveIn />
                    </div>
                    <div className="icon_wrapper">
                        <BiDotsVerticalRounded />
                    </div>
                </div>
            </div>
        </CardStyled>
    );
}