
import React from 'react';
import Carta from './tarjetasMain'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import tarjetasMain from './tarjetasMain';





const cards =  [
    {
        id: 1,
        title: 'DONACION DE PLASMA',
        descripcion: "Lizards are a widespread group of squamate reptiles with over 6000 fas  gb fg g fg g gsd g sihaiohdioa iodhaoid diohadiobauiodhio hfoiafhio ihao",
        image: "assets/image4.jpg",
    },
    {
        id: 2,
        title: 'DONACION DE SANGRE',
        descripcion: "Lizards are a widespread  dwads dsa dsad sadfefadfsad dwddsdwad dsdasdsdasdasdas dsadasddiobauiodhio hfoiafhio ihao",
        image: "assets/image1.jpg",
    },
    {
        id: 3,
        title: 'DONACION DE PLAQUETAS',
        descripcion: "ygrgef dfwdawdfsaf fafaf  faf asfa  ffawf a aw fwaf awf wafa fas fas  gb fg g fg g gsd g sihaiohdioa iodhaoid diohadiobauiodhio hfoiafhio ihao",
        image: "assets/image5.jpg",
    },
    {
      id: 4,
      title: 'DONACION DE PLAQUETAS',
      descripcion: "ygrgef dfwdawdfsaf fafaf  faf asfa  ffawf a aw fwaf awf wafa fas fas  gb fg g fg g gsd g sihaiohdioa iodhaoid diohadiobauiodhio hfoiafhio ihao",
      image: "assets/image3.jpg",
  },
  {
    id: 5,
    title: 'DONACION DE PLAQUETAS',
    descripcion: "ygrgef dfwdawdfsaf fafaf  faf asfa  ffawf a aw fwaf awf wafa fas fas  gb fg g fg g gsd g sihaiohdioa iodhaoid diohadiobauiodhio hfoiafhio ihao",
    image: "assets/image2.jpg",
},


]

export default function tarjetaid() {
  return (
    <Container>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 12, sm: 12, md: 12, lg: 12 }}  alignItems="center" justifyContent="center">
        {
            cards.map(tarjetasMain => (
                  <Grid item xs key={tarjetasMain.id}  display="flex" alignItems="center" justifyContent="center" textAlign="center" >
                     <Carta title={tarjetasMain.title} descripcion={tarjetasMain.descripcion} imagen={tarjetasMain.image} />
                  </Grid>
            ))
        }
      </Grid>
    </Container>
  );
}
