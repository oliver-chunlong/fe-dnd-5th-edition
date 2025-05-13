import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MonsterCard from "./CategoryCards/Monster.jsx"
import ClassCard from "./CategoryCards/Class.jsx"
import SpellCard from "./CategoryCards/Spell.jsx"

function InfoCard({ searchResult, category, name}) {
  if (name) {
    if (category === "Classes") {
      return <ClassCard searchResult={searchResult} />
          }
    else if (category === "Monsters") {
      return <MonsterCard searchResult={searchResult} />
    }
    else if (category === "Spells") {
      return <SpellCard searchResult={searchResult} />
    }
  }
  else {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" content="div">
            {searchResult.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }

}

export default InfoCard;
