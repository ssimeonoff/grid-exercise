import {
  TileContainer,
  Overlay,
  Title,
  Description,
  DeleteButton,
  Image,
} from "./styles";

interface Props {
  title: string;
  description: string;
  imagePath: string;
  isCustom: boolean;
  id: number;
  deleteTile: (id: number) => void;
}

const Tile: React.FC<Props> = ({
  title,
  description,
  imagePath,
  isCustom,
  id,
  deleteTile,
}) => {
  return (
    <TileContainer>
      <Overlay>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Overlay>
      {isCustom && (
        <DeleteButton onClick={() => deleteTile(id)} tabIndex={0}>
          ✖
        </DeleteButton>
      )}
      <Image
        src={imagePath.replace(/&amp;/g, "&").replace("w=800", "w=200")}
        alt={description}
      />
    </TileContainer>
  );
};

export default Tile;
