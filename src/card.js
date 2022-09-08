import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import "./App.css";
// import ReadMore from "./ReadMore";
// import NotIntrested from "./NotIntrested";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { data } from "./data";
import ReadMore from "./ReadMore";

export default function TourCard() {
  const [places, setPlaces] = React.useState(data);

  return (
    <>
      <Card sx={{ maxWidth: 600 }}>
        {places.map((place) => {
          const { id, img, description, about, price } = place;
          const handleRemove = (id) => {
            let newPlace = places.filter((remove) => remove.id !== id);
            setPlaces(newPlace);
          };
          return (
            <div key={id} className="card">
              <img alt="paris" width="600" height="280" src={img} />
              <div className="package">
                <h4>{description}</h4>
                <button className="price" disabled>
                  <AttachMoneyIcon style={{ height: 15 }}></AttachMoneyIcon>
                  {price}
                </button>
              </div>
              <div>
                <p className="about">
                  <ReadMore>{about}</ReadMore>
                </p>
              </div>
              <button
                className="btn-not-intrested"
                onClick={() => handleRemove(id)}
              >
                Not Intrested
              </button>
            </div>
          );
        })}
      </Card>
    </>
  );
}
