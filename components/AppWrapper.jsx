const AppWrapper = (props) => {
  return(
    <div className='bg-gray-800 min-h-screen flex flex-col items-center justify-start p-5 debug-screens'>
      {props.children}
    </div>
  )
}
export default AppWrapper;