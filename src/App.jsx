import "./App.css";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <FormDemo />
      {/* <RatingDemo /> */}
      {/* <Button
        size="small"
        color="success"
        onClick={() => alert("Hi!")}
        variant="contained">
        Contained
      </Button>
      <Button size="large" variant="outlined">
        Outlined
      </Button>
      <Button variant="text">Text</Button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
    </div>
  );
}

export default App;
