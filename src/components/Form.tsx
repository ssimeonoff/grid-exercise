import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { FormType } from "../hooks/useData";
import { FormContainer, Button, ButtonAdd } from "./styles";

interface Props {
  addTile: (formData: FormType) => void;
}

const Form: React.FC<Props> = ({ addTile }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imagePath: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
    // Reset the form data
    setFormData({
      title: "",
      description: "",
      imagePath: "",
    });
    // Handle form submission here, for example, you can log the form data
    addTile(formData);
  };

  useEffect(() => {
    // Focus the first form input field when the form appears
    inputRef.current && inputRef.current.focus();
  }, [showForm]);

  return (
    <>
      {showForm ? (
        <FormContainer>
          <div>Add new tile</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              required
              ref={inputRef}
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              required
            />
            <input
              type="text"
              name="imagePath"
              value={formData.imagePath}
              onChange={handleChange}
              placeholder="Image path"
              required
            />
            <Button
              type="button"
              onClick={() => {
                setShowForm(false);
                setFormData({
                  title: "",
                  description: "",
                  imagePath: "",
                });
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </form>
        </FormContainer>
      ) : (
        <ButtonAdd
          onClick={() => {
            setShowForm(true);
            inputRef.current && inputRef.current.focus();
          }}
          tabIndex={0}
        >
          +
        </ButtonAdd>
      )}
    </>
  );
};

export default Form;
