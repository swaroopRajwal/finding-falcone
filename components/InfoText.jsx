import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateTime } from "../lib/redux/reducers/result";

const InfoText = ({
  selectedPlanet,
  selectedVehicle,
  showPlanet,
  showVehicle,
  journey,
}) => {
  const planet = useSelector((state) =>
    state.planets.planets.filter((item) => item.name === selectedPlanet)
  );
  const vehicle = useSelector((state) =>
    state.vehicles.vehicles.filter((item) => item.name === selectedVehicle)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (showVehicle && showPlanet) {
      dispatch(
        updateTime({
          journey: journey,
          time: planet[0].distance / vehicle[0].speed,
        })
      );
    }
  }, [showPlanet, showVehicle]);
  return (
    <>
      {showPlanet && (
        <p className="text-dark font-medium py-2 tracking-wider">
          Selected Planet: {selectedPlanet}
        </p>
      )}
      {showVehicle && (
        <p className="text-dark font-medium py-2 tracking-wider">
          Selected Vehicle: {selectedVehicle}
        </p>
      )}
      {showVehicle && showPlanet ? (
        <p className="text-dark font-medium py-2 tracking-wider">
          Time: {planet[0].distance / vehicle[0].speed}
        </p>
      ) : null}
    </>
  );
};
export default InfoText;
