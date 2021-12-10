import { Fragment, useEffect, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { updateVehicle } from '../../lib/redux/reducers/spaceVehicles'
import { updateSelectedVehicle } from '../../lib/redux/reducers/result'

const VehicleDropDown = ({data, journey}) => {
  const [selectedItem, setSelectedItem] = useState({name: 'select a vehicle'})
  const [previousSelected, setPreviousSelected] = useState(null);
  const dispatch = useDispatch();
  // const option = useRef(null);
  const clickHandler = async(vehicle) => {
    dispatch(updateSelectedVehicle({journey: journey, vehicle: vehicle.name}))
    dispatch(updateVehicle({name:vehicle.name, count:-1}));
    if(!previousSelected.speed) return;
    dispatch(updateVehicle({name: previousSelected.name, count:1}));  
  }
  useEffect(() => {
    setPreviousSelected(selectedItem);
  }, [selectedItem])
  return (
    <div className="max-w-xs w-full">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <div className="relative mt-1">
          <Listbox.Button className=" flex justify-between items-center px-2 w-full py-2 sm:m-0 mb-4 text-left bg-pink rounded-sm shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-pink focus-visible:ring-offset-yellow focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate text-dark sm:font-semibold tracking-wider">{selectedItem.name}</span>
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
                  className='cursor-default select-none relative'
                  disabled={item.total_no === 0 || item.name === selectedItem.name}
                  value={item}
                >
                  <>
                    <button
                      onClick={() => clickHandler(item)}
                      className='w-full py-2 px-2 sm:px-4 text-left flex justify-between sm:justify-evenly items-center gap-[2px]'
                      disabled={item.total_no === 0}
                    >
                      <p className='text-dark sm:font-medium text-xs sm:text-sm'>{item.name} ({item.total_no})</p>
                      <p className='text-xs text-dark '>max distance:{item.max_distance}</p>
                      <p className='text-xs text-dark '>speed:{item.speed}</p>
                    </button>
                  </>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
export default VehicleDropDown;