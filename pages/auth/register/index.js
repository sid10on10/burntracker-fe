import { Box, Button, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import  axios from 'axios';

import styles from '../../../styles/register/Register.module.css';

export default function Register(){

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const  handleRegister = () => {
        if(validateEmail(email) && first.length > 0 && last.length > 0){
            console.log({
                "name": first + " " + last,
                "email": email,
                "password": password
            })

            const headers = {
                "Content-Type": "application/json",
              };
           
            axios.post("http://localhost:6000/register", {
                "name": first + " " + last,
                "email": email,
                "password": password
            })
            .then((response) => {
                console.log(response);
            });
        }

        
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} sx={{ backgroundColor: 'white' }}>
                    <Box className={styles.outdiv}>
                        <Box className={styles.innerdiv}>
                            <p className={styles.header}>Burntracker</p>
                            <p className={styles.para}>Please fill your detail to create your account.</p>
                            <Box sx={{ marginTop: '20px' }}>
                                <p className={styles.label}>First Name</p>
                                <TextField id="outlined-firstname" type="text" variant="outlined" onChange={() => setFirst(event.target.value)}  sx={{ 
                                        width: '50%',  
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#FF4500',
                                            },
                                        },
                                        '& label.Mui-focused': {
                                            color: 'black',
                                        }
                                    }} 
                                />
                            </Box>
                            <Box sx={{ marginTop: '20px' }}>
                                <p className={styles.label}>Last Name</p>
                                <TextField id="outlined-lastname" type="text" variant="outlined" 
                                onChange={() => setLast(event.target.value)}
                                sx={{ 
                                        width: '50%',  
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#FF4500',
                                            },
                                        },
                                        '& label.Mui-focused': {
                                            color: 'black',
                                        }
                                    }} 
                                />                            
                            </Box>
                            <Box sx={{ marginTop: '20px' }}>
                                <p className={styles.label}>Email</p>
                                <TextField id="outlined-email" type="email" variant="outlined" 
                                onChange={() => setEmail(event.target.value)}
                                sx={{ 
                                        width: '50%',  
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#FF4500',
                                            },
                                        },
                                        '& label.Mui-focused': {
                                            color: 'black',
                                        }
                                    }} 
                                />                            
                            </Box>
                            <Box sx={{ marginTop: '20px' }}>
                                <p className={styles.label}>Password</p>
                                <TextField id="outlined-firstname" type="password" variant="outlined"  
                                onChange={() => setPassword(event.target.value)}
                                sx={{ 
                                        width: '50%',  
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#FF4500',
                                            },
                                        },
                                        '& label.Mui-focused': {
                                            color: 'black',
                                        }
                                    }} 
                                />                            
                            </Box>
                            <Box sx={{ marginTop: '20px' }} onClick={handleRegister}>
                                <Button variant="contained" sx={{ backgroundColor: '#FF4500', width: '50%', height: '44px', textTransform: 'capitalize' }}>Register</Button>
                            </Box>
                            <Box>
                                <p className={styles.small}>Already have an account ? <strong style={{ color: '#FF4500' }}>Login</strong></p>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={styles.registerdiv}>
                    <Box>
                    
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}