type MoodBoardItemProps = {
  color: string;
  image: string;
  description: string;
};

const MoodBoardItem = ({ color, image, description }: MoodBoardItemProps) => {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export default MoodBoardItem;
