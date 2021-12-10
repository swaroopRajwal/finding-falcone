import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateSelectedPlanet } from "../../lib/redux/reducers/result";

const PlanetDropDown = ({ data, journey }) => {
  const [selected, setSelected] = useState({name: 'select planet'});
  const [previousSelected, setPreviousSelected] = useState(null)
  const dispatch = useDispatch() 
  const selectedPlanets = useSelector(state => state.result.selected)
  const clickHandler = (planet) => {
    dispatch(updateSelectedPlanet({journey: journey, planet:planet.name}))
    if (!previousSelected.distance) return;
  }
  useEffect(() => {
    setPreviousSelected(selected);
  }, [selected])
  return (
    <div className="max-w-xs w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className=" flex justify-between items-center w-full py-2 sm:m-0 mb-4 px-2 text-left bg-pink rounded-sm shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-pink focus-visible:ring-offset-yellow focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate text-dark sm:font-semibold tracking-wider">{selected.name}</span>
              <SelectorIcon
                className="w-5 h-5 text-dark"
                aria-hidden="true"
              />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-pink rounded-sm shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
              {data.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className='select-none relative'
                  value={item}
                  disabled={selectedPlanets.find(selectedPlanet => selectedPlanet.planet === item.name)}
                >
                  <>
                    <button
                      onClick={() => clickHandler(item)}
                      className='flex items-center justify-between w-full py-2 px-4 focus:outline-none focus:ring-violet'
                      disabled={selectedPlanets.find(selectedPlanet => selectedPlanet.planet === item.name)}
                    >
                      <p className='text-dark text-xs sm:font-medium sm:text-sm'>{item.name}</p>
                      <p className='text-xs text-dark '>{item.distance} megamiles</p>
                    </button>
                  </>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default PlanetDropDown;
