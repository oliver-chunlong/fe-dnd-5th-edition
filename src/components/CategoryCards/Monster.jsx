import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function MonsterCard({ cardInfo }) {
  // return <li>name = {cardInfo.name}</li>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" content="div">
          {cardInfo.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MonsterCard;