import { Card } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import useArrayCardContext from "../contexts/PlayerContext";
import { useState } from "react";

const PlayCard = ({ cardValue, index }: { cardValue: number, index: number }) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const { arrayCard, setArrayCard } = useArrayCardContext();

    const dragStart = (e: React.DragEvent<HTMLElement>) => {
        e.dataTransfer.setData("text/plain", String(e.currentTarget.dataset.index))
    }

    const drop = (e: React.DragEvent<HTMLElement>) => {
        const oldIndex = parseInt(e.dataTransfer.getData("text/plain"));
        //e.currentTarget contain the object on which we dropped on the card dragged
        const newIndex = parseInt(e.currentTarget.dataset.index || "", 10);;

        if (isNaN(oldIndex) || isNaN(newIndex) || oldIndex === newIndex) return;

        let newArray = [...arrayCard];
        //-- version to just swap the cards --
        //newArray[oldIndex]=arrayCard[newIndex];
        //newArray[newIndex]=arrayCard[oldIndex];

        //-- version to insert the card dropped --
        // remove the dragged card from the array, no third argument because no insertion
        const [movedCard] = newArray.splice(oldIndex, 1); 
        // insert it at the new position, 0 in the second argument because not deletion
        newArray.splice(newIndex, 0, movedCard);          

        setArrayCard(newArray);
        setArrayCard(newArray);
        setIsDragOver(false);
    }

    const dragOver = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
    }

    const dragEnter = () => setIsDragOver(true);
    const dragLeave = () => setIsDragOver(false);

    return (
        <Card
            draggable={true}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDragStart={(e) => dragStart(e)}
            onDrop={(e) => drop(e)}
            onDragOver={(e) => dragOver(e)}
            data-index={index}
            sx={{
                borderRadius: '15px',
                border: isDragOver ? '1px solid blue' : '1px solid black',
            }}
        >
            <CardMedia
                draggable={false}
                component="img"
                image={`${cardValue}.svg`}
                alt={`${cardValue}`}
            />
        </Card>
    );
}

export default PlayCard;