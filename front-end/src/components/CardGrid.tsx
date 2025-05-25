import { Grid } from "@mui/material";
import PlayCard from "./PlayCard";
import { cardValue } from "../functions";

const CardGrid = () => {
    return (
        <Grid container spacing={2}>
            {Array(10).map((_, i) => (
                <Grid key={i}>
                    <PlayCard cardValue={cardValue()} />
                </Grid>
            ))
            }

        </Grid>
    );
}

export default CardGrid;

