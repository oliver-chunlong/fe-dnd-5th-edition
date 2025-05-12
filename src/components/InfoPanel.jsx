import InfoCard from "./InfoCard.jsx";

function InfoPanel({ searchResults }) {
  const cards = searchResults.map((searchResult) => {
    return <InfoCard cardInfo={searchResult} />;
  });

  return (
    <div>
      <ol>{cards}</ol>
    </div>
  );
}

export default InfoPanel;
