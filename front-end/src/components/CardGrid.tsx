import { Grid } from "@mui/material";
import PlayCard from "./PlayCard";
import useArrayCardContext from "../contexts/PlayerContext";

const CardGrid = () => {
    const {arrayCard} = useArrayCardContext();
    return (
        <Grid container spacing={2}>
            {arrayCard && arrayCard.map((item, i) => (
                <Grid key={i}>
                    <PlayCard cardValue={item} index={i}/>
                </Grid>
            )
            )
            }

        </Grid>
    );
}

export default CardGrid;

