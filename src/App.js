

import Home from "./pages/Home";
import Grid from "@mui/material/Grid"
import Numbers from "./components/Numbers"
import "./global.scss"
import TopBar from "./components/TopBar"
function App() {
  return (
      <>
        <TopBar/>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          height={"80vh"}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{width:'fit-content'}}
          >
              <Home/>
              <Numbers/>
          </Grid>
        </Grid>
      </>
  );
}

export default App;

