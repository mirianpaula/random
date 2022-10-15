import { Typography } from "@mui/material";

function Home() {
    return (  
        <>
        <Typography color={"white"} variant="h2" marginTop={5}>
            Mega-Sena
        </Typography>
        <Typography color={"white"} variant="subtitle1" marginTop={0} width={'400px'} align='center'>
            Os números sorteados da Mega-Sena são:
        </Typography>
        </>
    );
}

export default Home;