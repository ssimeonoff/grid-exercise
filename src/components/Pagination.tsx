import { useEffect, useRef } from "react";
import { PageLabel, PaginationButton, PaginationContainer } from "./styles";

interface Props {
  size: number;
  page: number;
  max: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ size, page, max, setPage }) => {
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const pageLabel = `${size * page + 1}-${
    size * (page + 1) > max ? max : size * (page + 1)
  }/${max}`;
  const isPreviousDisabled = page === 0;
  const isNextDisabled = size * (page + 1) >= max;

  const decrement = () => {
    if (!isPreviousDisabled) {
      setPage(page - 1);
    }
  };

  const increment = () => {
    if (!isNextDisabled) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        previousRef.current && previousRef.current.focus();
      if (e.key === "ArrowRight") nextRef.current && nextRef.current.focus();
    };

    // Add event listener when component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <PaginationContainer>
      <PaginationButton
        type="button"
        disabled={isPreviousDisabled}
        onClick={() => decrement()}
        ref={previousRef}
      >
        PREV
      </PaginationButton>
      <PageLabel>{max > 0 ? pageLabel : "---/-"}</PageLabel>
      <PaginationButton
        type="button"
        disabled={isNextDisabled}
        onClick={() => increment()}
        ref={nextRef}
      >
        NEXT
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
