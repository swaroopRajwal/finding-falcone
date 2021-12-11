import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryWrapper from "../components/PrimaryWrapper";
import { clear, getToken } from "../lib/redux/reducers/result";
import { useRouter } from "next/dist/client/router";

const Success = ({ planet, time }) => {
  return (
    <>
      <p className="resulttext">You found Falcone!!!</p>
      <p className="resulttext">planet: {planet}</p>
      <p className="resulttext">time taken: {time}</p>
    </>
  );
};

const Fail = () => {
  return (
    <>
      <p className="resulttext">purr</p>
      <p className="resulttext">Your didn't found falcone</p>
      <p className="resulttext">better luck next time uwu</p>
    </>
  );
};

let dontDispatch = false;

const ResultPage = () => {
  const dispatch = useDispatch();
  const selection = useSelector((state) => state.result.selected);
  const result = useSelector((state) => state.result.result);
  const router = useRouter();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(clear());
    dontDispatch = true;
    router.push("/");
  };

  useEffect(() => {
    if(!selection[0].planet) return;
    dispatch(getToken(selection));
  }, [dispatch, selection]);

  return (
    <div className=" max-w-screen-md w-full">
      <PrimaryWrapper>
        <p className="title">Finding Falcone!!!</p>
      </PrimaryWrapper>
      <PrimaryWrapper>
        {result.show ? (
          <>
            {result.status ? (
              <Success
                planet={result.planet}
                time={
                  selection.filter((item) => item.planet === result.planet)[0]
                    .time
                }
              />
            ) : (
              <Fail />
            )}
          </>
        ) : <p className='resulttext'>Loading...</p>}
      </PrimaryWrapper>
      <div className="w-full flex justify-center">
        <button className="button" onClick={clickHandler}>
          Play Again
        </button>
      </div>
    </div>
  );
};
export default ResultPage;
