import { Box, Button, Checkbox, Grid, TextField, Collapse, Alert, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import { endpoint, routes } from '../../../config';

import styles from '../../../styles/login/Login.module.css';

export default function Register(){
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

    async function login(){
        let data = {
            email,
            password
        }
        try {
            let response = await axios.post(endpoint[endpoint['current']]+routes["auth"]["login"], data)
            
            if (response.status == 200){
                setError(true)
                setType('success')
                setMessage(response.data.message)
                if(response.data.message == 'Login Successfull'){
                    window.localStorage.setItem('accesstoken', response.data.token)
                    router.push('/profile')
                }
            }
        } catch (error) {
            console.log(error)
            if (error.response?.status == 400){
                setError(true)
                setType('error')
                setMessage(error.response.data.message)
            }else{
                setError(true)
                setType('error')
                setMessage('Something went wrong Please try again!')
            }
        }
    }

    return (
        <Box>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} sx={{ backgroundColor: 'white' }}>
                    <Box className={styles.outdiv}>
                        <Box className={styles.innerdiv}>
                            <p className={styles.header}>Burntracker</p>
                            <p className={styles.para}>Please fill your detail to access your account.</p>
                            <Box sx={{ marginTop: '20px' }}>
                                <p className={styles.label}>Email</p>
                                <TextField id="outlined-email" type="email" variant="outlined" value={email} onChange={(event)=>{
                                    setEmail(event.target.value)
                                }} sx={{ 
                                        width: '100%',  
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
                                <TextField id="outlined-firstname" type="password" variant="outlined" value={password} onChange={(event)=>{
                                    setPassword(event.target.value)
                                }} sx={{ 
                                        width: '100%',  
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
                            <Box sx={{ color: 'black', display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontFamily: 'Inter', fontSize: '14px' }}>
                                <p style={{ position: 'relative', bottom: '12px', right: '8px' }}><Checkbox defaultChecked />Remember me</p>
                                <Link href='/auth/forgot'><p style={{ color: '#FF4500' }}>Forgot Password?</p></Link>
                            </Box>
                            <div style={{ marginTop: '20px' }}>
                                <Collapse in={error} sx={{ width: '355px' }}>
                                    <Alert
                                    severity={type}
                                    action={
                                        <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setError(false);
                                            setMessage('')
                                        }}
                                        >
                                        <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                    >
                                    {message}
                                    </Alert>
                                </Collapse>
                            </div>
                            <Box sx={{ marginTop: '20px' }}>
                                <Button variant="contained" onClick={()=>{
                                    login()
                                }} sx={{ 
                                    backgroundColor: '#FF4500', 
                                    width: '100%', 
                                    height: '44px', 
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FF4500'
                                    }
                                }}
                                >Login</Button>
                            </Box>
                            <Box>
                                <p className={styles.small}>Don’t have an account? <Link href='/auth/register'><strong style={{ color: '#FF4500' }}>Register</strong></Link></p>
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