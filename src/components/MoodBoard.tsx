import MoodBoardItem from "./MoodBoardItem";

type MoodBoardData = {
  id: number;
  color: string;
  image: string;
  description: string;
};

const MoodBoard = () => {
  const moodBoardItems: MoodBoardData[] = [
    {
      id: 1,
      color: "#FF5733",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Caribbean",
    },
    {
      id: 2,
      color: "#33FF57",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Gawadar Beach",
    },
    {
      id: 3,
      color: "#3357FF",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Cape Town",
    },
    {
      id: 4,
      color: "#FF7F50",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Suez Canal",
    },
    {
      id: 5,
      color: "#D4D6DA",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Santorini",
    },
    {
      id: 6,
      color: "#8E44AD",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Istanbul",
    },
  ];

  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {moodBoardItems.map((item) => (
          <MoodBoardItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MoodBoard;
