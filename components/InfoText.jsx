import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import planets from "../lib/redux/reducers/planets";
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
  const [journeyFail, setJourneyFail] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (showVehicle && showPlanet) {
      setJourneyFail(planet[0].distance > vehicle[0].max_distance);
      dispatch(
        updateTime({
          journey: journey,
          time: planet[0].distance / vehicle[0].speed,
        })
      );
    }
  }, [showPlanet, showVehicle, journey, planet, vehicle, dispatch]);
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
      {journeyFail && <p className='text-tailwindpink-800 font-medium py-2 tracking-wider'>This journey would fail, your vehicle can't go this far</p>}
    </>
  );
};
export default InfoText;
