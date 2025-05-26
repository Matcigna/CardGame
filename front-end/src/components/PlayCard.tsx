import { Card } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import useArrayCardContext from "../contexts/PlayerContext";
import { useState } from "react";

const PlayCard = ({ cardValue, index }: { cardValue: number, index:number }) => {
    const [isDragOver, setIsDragOver]=useState(false);
    const {arrayCard, setArrayCard}=useArrayCardContext();

    const dragStart = (e: React.DragEvent<HTMLElement>) => {
        e.dataTransfer.setData("text/plain", String(e.currentTarget.dataset.index))
    }

    const drop = (e: React.DragEvent<HTMLElement>) => {
      const oldIndex=parseInt(e.dataTransfer.getData("text/plain"));
      //e.currentTarget contain the object on which we dropped on the card dragged
      const newIndex=parseInt(e.currentTarget.dataset.index || "", 10);;

      if (isNaN(oldIndex) || isNaN(newIndex) || oldIndex === newIndex) return;
    
      let newArray=[...arrayCard];

      //newArray[oldIndex]=arrayCard[newIndex];
      //newArray[newIndex]=arrayCard[oldIndex];
      const [movedCard] = newArray.splice(oldIndex, 1); // remove the dragged card from the array
      newArray.splice(newIndex, 0, movedCard);          // insert it at the new position, 0 because not deletion
      
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
            onDragOver={(e)=>dragOver(e)}
            data-index={index}
            sx={{
                borderRadius:'15px',
                border: isDragOver ? '2px solid blue' : 'none',
                transition: 'border 0.2s ease',
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