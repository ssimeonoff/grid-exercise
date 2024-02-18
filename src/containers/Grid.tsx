import GridUI from "../components/GridUI";
import useData from "../hooks/useData";

const Dashboard: React.FC = () => {
  const { array, deleteTile, addTile } = useData();

  return <GridUI array={array} deleteTile={deleteTile} addTile={addTile} />;
};

export default Dashboard;
