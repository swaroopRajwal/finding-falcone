const AppWrapper = (props) => {
  return(
    <div className={`bg-dark min-h-screen flex flex-col items-center justify-start p-5 overflow-auto ${process.env.NODE_ENV !== "production" ? 'debug-screens' : null}`}>                                                                   
      {props.children}
    </div>
  )
}
export default AppWrapper;