import MY_DATA from "../Data";
import { NavLink, useParams } from "react-router-dom";

function Rent() {
  const { id } = useParams();

  // Convert id to a number since URL parameters are treated as strings
  const productId = parseInt(id);

  const proDetail = MY_DATA.filter((x) => x.id === productId);
  const product = proDetail[0];

  const handleButtonClick = () => {
    window.alert("Successfully rented the car!");
  };

  return (
    <>
      <div className="text-center mt-3">
        <img src={product.image} className="rounded mx-auto d-block" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">{`${product.company} ${product.model} ${product.year}`}</h5>
          <p className="card-text">{`Rs ${product.price}`}</p>
          <p className="card-text">{`Fuel Type: ${product.fuelType}`}</p>
          <p className="card-text">{`Transmission: ${product.transmission}`}</p>
          <p className="card-text">{`Mileage: ${product.mileage} miles`}</p>
          <p className="card-text">{`Description: ${product.description}`}</p>

          {/* Add any other details you want to display */}
          <NavLink to="#" className="btn btn-primary" onClick={handleButtonClick}>
            Click here
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Rent;
