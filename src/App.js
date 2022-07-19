import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import QRCode from "qrcode";

function App() {
  const classes = useStyles();

  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateQrCode = async() => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container className={classes.container}>
      <Card>
        <h2 className={classes.title}>Generate & Scan QR Codes</h2>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={()=> generateQrCode()}
              >
                Generate
              </Button>
              <br/>
              <br/>
              <br/>
              {imageUrl ? (<a href={imageUrl} download> <img src={imageUrl} alt="img" /></a>) : null}
              
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#3f51b5",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft:5
  },
}));
export default App;
