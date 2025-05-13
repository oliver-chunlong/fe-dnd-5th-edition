import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ClassCard({ searchResult }) {
  const name=searchResult.name
  console.log(searchResult)
  const proficiencies = searchResult.proficiencies.map((proficiency) => proficiency.name)

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" content="div">
          {name}
        </Typography>
        <Typography variant="h5" content="div">
          {proficiencies}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ClassCard;