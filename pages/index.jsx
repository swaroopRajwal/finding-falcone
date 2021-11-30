import DropDown from "../components/DropDown";
import Grid from "../components/Grid";
import PrimaryWrapper from "../components/PrimaryWrapper";

const Home = () => {

  return(
    <div className=' max-w-screen-md w-full'>
      <PrimaryWrapper>
        <p className='title'>Select a Planet and a Space vehicle for each planet</p>
      </PrimaryWrapper>

      <PrimaryWrapper>
        <Grid>
          <DropDown/>
          <DropDown/>
        </Grid>
      </PrimaryWrapper>

      <PrimaryWrapper>
        <Grid>
          <DropDown/>
          <DropDown/>
        </Grid>
      </PrimaryWrapper>

      <PrimaryWrapper>
        <Grid>
          <DropDown/>
          <DropDown/>
        </Grid>
      </PrimaryWrapper>

      <PrimaryWrapper>
        <Grid>
          <DropDown/>
          <DropDown/>
        </Grid>
      </PrimaryWrapper>
    </div>
  )
}
export default Home;