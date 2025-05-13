import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MonsterCard from "./CategoryCards/Monster.jsx"
import ClassCard from "./CategoryCards/Class.jsx"
import SpellCard from "./CategoryCards/Spell.jsx"

function InfoCard({ searchResult, setDisplay }){

    function handleClick() {
      const url = searchResult.url
      if(url) {
        setDisplay(() => {
          fetch(url)
          .then((response) => {
            console.log("response in info card: ", response)
            return response.json();
          })
          .then((body) => {
            return setDisplay(body)
          })
        })
      }
      else{
        setDisplay(searchResult)
      }
    }
    return (
      <Button variant="contained" size="large" onClick={handleClick}>
      {searchResult.name}
    </Button>
    );
}

export default InfoCard;
