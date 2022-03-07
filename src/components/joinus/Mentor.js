import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
function Mentor(){
  const[email,setEmail]=useState("");
  const[name,setName]=useState("");
  const[skills,setSkills]=useState("");
  const[cv,setCv]=useState("");
  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onSkillsChange = (e) => setSkills(e.target.value);
  const onCVChange = (e) => setCv(e.target.value);
  return (
    <ThemeProvider theme={theme}>
        <div style={{background:"black"}}>
         <Card sx={{ maxWidth: 400 ,marginLeft:"400px",maxHeight:"600px", bgcolor:"#FFe5B4"
    }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5" style={{fontstyle:"Calibri"}}>
            Mentor Application
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 2 }}>
          <TextField
             required
             id="Name"
             name="Name"
             label="Name"
             fullWidth
             autoComplete="given-name"
             variant="standard"
             color='secondary'
             onChange={onNameChange}
             value={name}
           />
           
             <TextField
             required
             id="email"
             fullWidth
             name="email"
             label="Email"
             variant="standard"
             color='secondary'
             onChange={onEmailChange}
             value={email}
           />
             <TextField
             required
             id="skills"
             fullWidth
             name="skills"
             label="Skills"
             variant="standard"
             color='secondary'
             onChange={onSkillsChange}
             value={skills}
           />
             <TextField
             required
             id="CV"
             fullWidth
             name="Link to CV"
             label="Link to CV"
             variant="standard"
             color='secondary'
             onChange={onCVChange}
             value={cv}
           />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
            >
              SUBMIT
            </Button>
           
          </Box>
        </Box>
      
      </Container>
      </Card>
      </div>
    </ThemeProvider>
  );
}
export default Mentor;
