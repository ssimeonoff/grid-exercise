import { useEffect, useState } from "react";
import data from "../data.json";

const LOCAL_STORAGE_DATA_KEY = "customTiles";

interface GridElementId {
  title: string;
  description: string;
  imagePath: string;
  id: number;
  isCustom: boolean;
}

export interface FormType {
  title: string;
  description: string;
  imagePath: string;
}

const useData = () => {
  const [array, setArray] = useState<GridElementId[]>([]);
  const [customArray, setCustomArray] = useState<FormType[]>([]);

  const getLocalStorageData = () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
    if (savedData) {
      setCustomArray(JSON.parse(savedData));
    }
  };

  // useEffect to load data from localStorage on component mount
  useEffect(() => {
    getLocalStorageData();
  }, []);

  // useEffect to merge the custom and default arrays and index them
  useEffect(() => {
    setArray(
      customArray
        .map((item) => ({
          isCustom: true,
          ...item,
        }))
        .concat(
          data.map((item) => ({
            isCustom: false,
            ...item,
          }))
        )
        .map((item, index) => ({
          id: index,
          ...item,
        }))
    );
  }, [customArray]);

  const addTile = (formData: FormType) => {
    //add the new tile at the beginning
    const newArray = [formData, ...customArray];
    setCustomArray(newArray);
    localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(newArray));
  };

  const deleteTile = (id: number) => {
    //delete a tile
    const newArray = customArray.filter((item, index) => index !== id);
    setCustomArray(newArray);
    localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(newArray));
  };

  return {
    array,
    addTile,
    deleteTile,
  };
};

export default useData;
