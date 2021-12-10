const AppWrapper = (props) => {
  return(
    <div className='bg-dark min-h-screen flex flex-col items-center justify-start p-5 debug-screens overflow-auto'>
      {props.children}
    </div>
  )
}
export default AppWrapper;