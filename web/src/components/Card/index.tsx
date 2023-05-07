import { BiArchiveIn, BiBellPlus, BiCheck, BiDotsVerticalRounded, BiImageAdd, BiPalette, BiUserPlus } from "react-icons/bi";
import { CardStyled } from "./style";
import { RefObject, useRef, useState } from "react";

type CardProps = {
    children: React.ReactNode;
    color: string;
}


export function Card(props: CardProps) {

    const style_modalClose = {
        opacity: 0,
        display: "none",
        transform: "translate(0px, 0px)",
        width: "184px",
        height: "200px"
    }


    const cardRef: RefObject<HTMLDivElement> = useRef(null);
    const divRef = useRef<HTMLDivElement>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [cardOpacity, setCardOpacity] = useState(1);
    const [modalStyle, setModalStyle] = useState(style_modalClose);
    const [bd_modalStyle, set_bdModalStyle] = useState({
        background: "rgba(10,10,10,.5)",
        transition: ".2s all",
        display: "none",
    });


    function handleModal() {

        const divElement = cardRef.current;

        if (divElement && divRef.current) {
            const rect = divElement.getBoundingClientRect();
            const divRef_proprerity = divRef.current;
            const cardHeight = divRef.current.offsetHeight;

            if (modalOpen) {
                setModalOpen(false);
                set_bdModalStyle({
                    background: "rgba(0,0,0,0)",
                    transition: ".2s all",
                    display: "block",
                })
                setModalStyle({
                    opacity: 1,
                    display: "block",
                    transform: `translate(${rect.left}px, ${rect.top}px)`,
                    width: "184px",
                    height: `${divRef.current.offsetHeight - 58}px`
                });
                
                setTimeout(() => {
                    set_bdModalStyle({
                        background: "rgba(10,10,10,.5)",
                        transition: ".2s all",
                        display: "none",
                    })
                    setModalStyle({
                        opacity: 1,
                        display: "none",
                        transform: `translate(${rect.left}px, ${rect.top}px)`,
                        width: "184px",
                        height: `${divRef_proprerity}px`
                    });
                    setCardOpacity(1);
                }, 200);


            } else {
                setModalOpen(true);
                set_bdModalStyle({
                    background: "rgba(0,0,0,0)",
                    transition: ".2s all",
                    display: "block",
                })
                setModalStyle({
                    opacity: 1,
                    display: "block",
                    transform: `translate(${rect.left}px, ${rect.top}px)`,
                    width: "184px",
                    height: `${divRef.current.offsetHeight - 58}px`
                });

                setTimeout(() => {
                    set_bdModalStyle({
                        background: "rgba(10,10,10,.5)",
                        transition: ".2s all",
                        display: "block",
                    })
                    setModalStyle({
                        opacity: 1,
                        display: "block",
                        transform: `translate(calc((100vw - 600px)/2), 40px)`,
                        width: "600px",
                        height: "auto",
                    });
                    setCardOpacity(0);
                }, 10);
            }
        }
    }

    return (
        <div ref={divRef}>
            <CardStyled color={props.color} ref={cardRef}>

                <div className="modal_backDrop" style={bd_modalStyle} onClick={handleModal}>
                    <div className="modal" style={modalStyle}>
                        {props.children}
                    </div>
                </div>

                <div className="card" onClick={handleModal} style={{ opacity: cardOpacity }}>
                    <div className="div_check">
                        <BiCheck />
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
        </div>
    );
}