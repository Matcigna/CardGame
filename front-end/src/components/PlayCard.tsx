import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const PlayCard = ({cardValue}:{cardValue:number}) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          </CardContent>
        </Card>
    );
}

export default PlayCard;