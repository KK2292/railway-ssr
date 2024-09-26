import { css, Global } from "@emotion/react"
import { Container, Snackbar, Stack, Typography } from "@mui/material"
import { useState } from "react";

export const App=()=> {
  const myData = ["名前:河野公平", "年齢:22", "趣味:Splatoon",]

  const [open, setOpen] = useState(true);
  
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #666;
            margin: 0;
            padding: 80px;
          }
        `}
      />
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={5000} open={open} onClose={handleClose} message="Hello World"/>
      <Stack spacing={4} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Typography sx={{fontSize:"64px",color:"#fff"}}>My Profile</Typography>
        <Container sx={{backgroundColor:"#111",maxWidth:"500px",borderRadius:"10px",padding:"32px"}}>
          <Stack spacing={2}>
        {myData.map((data,index)=>(
          <Typography key={index} sx={{color:"#fff"}}>{data}</Typography>
        ))}</Stack>
        </Container>
      </Stack>
    </>
  )
}

