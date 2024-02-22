import { useEffect, useRef, useState } from "react";
import Pagination from "../components/Pagination";
import Tile from "../components/Tile";
import Form from "../components/Form";
import useData from "../hooks/useData";
import {
  HeaderContainer,
  GridContainer,
  InputContainer,
  Input,
  ClearButton,
} from "../components/styles";

const PAGE_SIZE = 9;

const Grid: React.FC = () => {
  const { array, deleteTile, addTile } = useData();

  const [page, setPage] = useState<number>(0);
  const [filterText, setFilterText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") inputRef.current && inputRef.current.focus();
    };

    // Focus the input field when the component mounts
    inputRef.current && inputRef.current.focus();

    // Add event listener when component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterText(e.target.value);
  };

  const handleClearClick = () => {
    setPage(0);
    setFilterText("");
    inputRef.current && inputRef.current.focus();
  };

  // Filter the data array based on the filter query
  const filteredArray = array.filter((item) => {
    return (
      item.title.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const renderTiles = () => {
    if (filteredArray.length === 0) return "No results found";

    return filteredArray
      .slice(PAGE_SIZE * page, PAGE_SIZE * (page + 1))
      .map((tile) => {
        return (
          <Tile
            key={tile.id}
            title={tile.title}
            description={tile.description}
            imagePath={tile.imagePath}
            id={tile.id}
            isCustom={tile.isCustom}
            deleteTile={deleteTile}
          />
        );
      });
  };

  return (
    <>
      <HeaderContainer>
        <Pagination
          size={PAGE_SIZE}
          page={page}
          setPage={setPage}
          max={filteredArray.length}
        />

        <InputContainer>
          <Input
            type="text"
            value={filterText}
            onChange={handleInputChange}
            placeholder="Search..."
            ref={inputRef}
          />
          {filterText && (
            <ClearButton onClick={handleClearClick}>✖</ClearButton>
          )}
        </InputContainer>

        <Form addTile={addTile} />
      </HeaderContainer>

      <GridContainer>{renderTiles()}</GridContainer>
    </>
  );
};

export default Grid;
