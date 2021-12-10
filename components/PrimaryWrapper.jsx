const PrimaryWrapper = (props) => {
  return(
    <div className='p-5 rounded-sm bg-yellow my-5 w-full'>
      {props.children}
    </div>
  )
}
export default PrimaryWrapper;