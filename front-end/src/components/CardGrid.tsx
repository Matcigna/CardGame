import Grid from "@mui/material/Grid";
import PlayCard from "./PlayCard";
import useArrayCardContext from "../contexts/PlayerContext";
import { useEffect, useState } from "react";
import { sizeElement, arrayKey } from "../parameter";
import Box from "@mui/material/Box";

const CardGrid = () => {
    const { arrayCard, setArrayCard } = useArrayCardContext();
    const [cardSelected, setCardSelected] = useState<null | number>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (cardSelected === null || !arrayKey.includes(e.key)) return;
    
            const offset = Math.floor(12 / sizeElement);
            let newIndex = cardSelected;
    
            if (e.key === "ArrowLeft" && cardSelected > 0) {
                newIndex = cardSelected - 1;
            } else if (e.key === "ArrowRight" && cardSelected < arrayCard.length - 1) {
                newIndex = cardSelected + 1;
            } else if (e.key === "ArrowUp" && cardSelected >= offset) {
                newIndex = cardSelected - offset;
            } else if (e.key === "ArrowDown" && cardSelected + offset < arrayCard.length) {
                newIndex = cardSelected + offset;
            }
    
            if (newIndex !== cardSelected) {
                const newArray = [...arrayCard];
                const [movedCard] = newArray.splice(cardSelected, 1);
                newArray.splice(newIndex, 0, movedCard);
                setArrayCard(newArray);
                setCardSelected(newIndex);
            }
        };
    
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [cardSelected, arrayCard, setArrayCard]);

    return (
        <Box sx={{
            height:"100vh", 
            width:'100vw', 
            display:"flex",
            justifyContent:"center"
            }}>
        <Grid container spacing={2} sx={{ width: "35vw"}}>
            {arrayCard &&
                arrayCard.map((item, i) => (
                    <Grid key={i} size={sizeElement}>
                        <PlayCard
                            cardValue={item}
                            index={i}
                            cardSelected={cardSelected}
                            setCardSelected={setCardSelected}
                        />
                    </Grid>
                ))}
        </Grid>
        </Box>
    );
};

export default CardGrid;
