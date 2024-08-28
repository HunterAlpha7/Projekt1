import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import {Box, Typography,TextField, Button} from '@mui/material';
const Register = () => {
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    password:''    
  })

  //Handle input change
  const handleChange = (e) =>{
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]:e.target.value
    }));
  };

  //form handle
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(inputs);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <Box maxWidth={450} display="flex" flexDirection={'column'} alignItems="center" justifyContent={"center"} margin="auto" marginTop={5} boxShadow="10px 10px 20px #ccc" padding={3} borderRadius={5}
      >
        <Typography
        variant="h4" sx= {{ textTransform:"uppercase" }} padding={3} textAlign="center"
        >
          Register
        </Typography>
        <TextField placeholder="name" value={inputs.name} onChange={handleChange} name="name" margin="normal" type={"text"} required/>
        <TextField placeholder="email" value={inputs.email}  onChange={handleChange} name="email" margin="normal" type={"email"} required/>
        <TextField placeholder="password" value={inputs.password} onChange={handleChange} name="password" margin="normal" type={"password"} required/>
        
        <Button type="submit" sx={{borderRadius:3,marginTop:3}} variant="contained" color="primary">
          Submit
        </Button>
        <Button onClick={() =>navigate("/login") }type="submit" sx={{borderRadius:3,marginTop:3}} color="primary">
          Already registered? Sign in
        </Button>
      </Box>
      </form>
    </>
  );
};

export default Register;