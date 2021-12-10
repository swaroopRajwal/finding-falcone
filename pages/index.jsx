import { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useDispatch } from "react-redux";
import PlanetDropDown from "../components/DropDown/PlanetDropDown";
import Grid from "../components/Grid";
import InfoText from "../components/InfoText";
import PrimaryWrapper from "../components/PrimaryWrapper";
import { getPlanets } from "../lib/redux/reducers/planets";
import VehicleDropDown from "../components/DropDown/VehiclesDropDown";
import { getVehicles } from "../lib/redux/reducers/spaceVehicles";

const Home = () => {
  const dispatch = useDispatch();
  const planetsReducer = useSelector((state) => state.planets);
  const vehiclesReducer = useSelector((state) => state.vehicles);
  const selected = useSelector((state) => state.result.selected);
  const planets = planetsReducer.planets;
  const vehicles = vehiclesReducer.vehicles;
  // console.log(planets);
  useEffect(() => {
    dispatch(getPlanets());
    dispatch(getVehicles());
  }, []);

  return (
    <div className=" max-w-screen-md w-full">
      <PrimaryWrapper>
        <p className="title">
          Select a Planet and a Space vehicle for each planet
        </p>
      </PrimaryWrapper>

      <PrimaryWrapper>
        <p className="subtitle">The first journey</p>
        <Grid>
          {!planetsReducer.loading && (
            <PlanetDropDown journey="one" data={planets} />
          )}
          {!vehiclesReducer.loading && (
            <VehicleDropDown journey="one" data={vehicles} />
          )}
        </Grid>
        <InfoText
          selectedPlanet={selected[0].planet}
          selectedVehicle={selected[0].vehicle}
          showPlanet={selected[0].planet}
          showVehicle={selected[0].vehicle}
          journey="one"
        />
      </PrimaryWrapper>

      <PrimaryWrapper>
        <p className="subtitle">The second journey</p>
        <Grid>
          {!planetsReducer.loading && (
            <PlanetDropDown journey="two" data={planets} />
          )}
          {!vehiclesReducer.loading && (
            <VehicleDropDown journey="two" data={vehicles} />
          )}
        </Grid>
        <InfoText
          selectedPlanet={selected[1].planet}
          selectedVehicle={selected[1].vehicle}
          showPlanet={selected[1].planet}
          showVehicle={selected[1].vehicle}
          journey="two"
        />
      </PrimaryWrapper>

      <PrimaryWrapper>
        <p className="subtitle">The third journey</p>
        <Grid>
          {!planetsReducer.loading && (
            <PlanetDropDown journey="three" data={planets} />
          )}
          {!vehiclesReducer.loading && (
            <VehicleDropDown journey="three" data={vehicles} />
          )}
        </Grid>
        <InfoText
          selectedPlanet={selected[2].planet}
          selectedVehicle={selected[2].vehicle}
          showPlanet={selected[2].planet}
          showVehicle={selected[2].vehicle}
          journey="three"
        />
      </PrimaryWrapper>

      <PrimaryWrapper>
        <p className="subtitle">The fourth journey</p>
        <Grid>
          {!planetsReducer.loading && (
            <PlanetDropDown journey="four" data={planets} />
          )}
          {!vehiclesReducer.loading && (
            <VehicleDropDown journey="four" data={vehicles} />
          )}
        </Grid>
        <InfoText
          selectedPlanet={selected[3].planet}
          selectedVehicle={selected[3].vehicle}
          showPlanet={selected[3].planet}
          showVehicle={selected[3].vehicle}
          journey="four"
        />
      </PrimaryWrapper>
      <div className="w-full flex justify-center mb-40">
        <Link href="/result">
          <a className="button">go to result</a>
        </Link>
      </div>
    </div>
  );
};
export default Home;
