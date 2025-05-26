import { Grid } from "@mui/material";
import PlayCard from "./PlayCard";
import useArrayCardContext from "../contexts/PlayerContext";
import { useEffect, useState } from "react";

const CardGrid = () => {
    const { arrayCard, setArrayCard } = useArrayCardContext();
    const [cardSelected, setCardSelected] = useState<null | number>(null)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            console.log(e.key);
            if (cardSelected !== null && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
                if (e.key === "ArrowLeft" && cardSelected > 0) {
                    setArrayCard(prev => {
                        const newArray = [...prev];
                        const [movedCard] = newArray.splice(cardSelected, 1);
                        newArray.splice(cardSelected - 1, 0, movedCard);
                        return newArray;
                    });
                    setCardSelected(prev => (typeof prev === "number" ? prev - 1 : prev));
                }
    
                if (e.key === "ArrowRight" && cardSelected < arrayCard.length - 1) {
                    setArrayCard(prev => {
                        const newArray = [...prev];
                        const [movedCard] = newArray.splice(cardSelected, 1);
                        newArray.splice(cardSelected + 1, 0, movedCard);
                        return newArray;
                    });
                    setCardSelected(prev => (typeof prev === "number" ? prev + 1 : prev));
                }
            }
        };
    
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [cardSelected, arrayCard.length]);    

    return (
        <Grid container spacing={2}>
            {arrayCard && arrayCard.map((item, i) => (
                <Grid key={i}>
                    <PlayCard
                        cardValue={item}
                        index={i}
                        cardSelected={cardSelected}
                        setCardSelected={setCardSelected}
                    />
                </Grid>
            )
            )
            }

        </Grid>
    );
}

export default CardGrid;

