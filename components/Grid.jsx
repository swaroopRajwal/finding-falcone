const Grid = (props) => {
  return(
    <div className='grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 justify-items-center align-middle'>
      {props.children}
    </div>
  )
}
export default Grid;