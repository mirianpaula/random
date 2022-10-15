import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useState,useEffect } from 'react';

let numerosGerados = []

const randomNumber = () => {
    let num = 0; 
    //Se o tamanho do array = 0, entao esse é o primeiro numero a ser gerado, ou seja impossivel ter numero igual.
    if (numerosGerados.length === 0){
        num =  Math.floor(Math.random()*(60 - 1))+2
    }

    else{
        num =  Math.floor(Math.random()*(60 - 1))+2
        //Se o numero estiver contido do array 'numerosGerados' ocorre uma recusrividade na func
        //ate que o numero reornado seja diferente dos contidos no array.
        if (numerosGerados.includes(num)){
            num = randomNumber()   
        }  
    }
    //Adiciono o numero gerado no array de numeros gerados.
    numerosGerados.push(num)
    return(num);
}

function Numbers() {
    
    const [att, setAtt] = useState(true);
    const [paperN, setPaperN] = useState(<div></div>);
    const arr = Array(6).fill(true)

    useEffect(() => {
        numerosGerados = []
          setPaperN(  
                arr.map((x) => (
                    <Paper elevation={3} sx={{height:50,width:50,display:"flex",justifyContent: "center",alignItems: "center"}}>
                        <Typography variant="h6">
                            {randomNumber()}
                        </Typography>
                    </Paper>
                    ))
           ) 
        
    }, [att])
    return (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        marginTop={4}
    >
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
        > 
            {paperN}       
        </Grid>  
            <Button variant="contained" sx={{mt:"20px"}} onClick={() => setAtt(!att)}>
                    sortear
            </Button>
        </Grid>
     );
}

export default Numbers;