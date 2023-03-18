import { Box, Button, Grid, TextField, Collapse, Alert, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../../styles/register/Register.module.css';
import { endpoint, routes } from '../../../config';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Register(){
    const router = useRouter()

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

    async function register(){
        let registerName = `${first} ${last}`
        let data = {
            name: registerName,
            email,
            password
        }
        try {
            let response = await axios.post(endpoint[endpoint['current']]+routes["auth"]["register"], data)
            
            if (response.status == 201){
                setError(true)
                setType('success')
                setMessage(response.data.message)
                router.push('/auth/login')
            }
        } catch (error) {
            if (error.response.status == 400){
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
                            <p className={styles.para}>Please fill your detail to create your account.</p>
                            <Box sx={{ marginTop: '20px' }}>
                                <p className={styles.label}>First Name</p>
                                <TextField id="outlined-firstname" type="text" variant="outlined" value={first} onChange={(event)=>{
                                    setFirst(event.target.value)
                                }} sx={{ 
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
                                <TextField id="outlined-lastname" type="text" variant="outlined" value={last} onChange={(event)=>{
                                    setLast(event.target.value)
                                }} sx={{ 
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
                                <TextField id="outlined-email" type="email" variant="outlined" value={email} onChange={(event)=>{
                                    setEmail(event.target.value)
                                }} sx={{ 
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
                                <TextField id="outlined-firstname" type="password" variant="outlined" value={password} onChange={(event)=>{
                                    setPassword(event.target.value)
                                }} sx={{ 
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
                            <div style={{ marginTop: '20px' }}>
                                <Collapse in={error} sx={{ width: '255px' }}>
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
                                    register()
                                }} sx={{ backgroundColor: '#FF4500', width: '50%', height: '44px', textTransform: 'capitalize' }}>Register</Button>
                            </Box>
                            <Box>
                                <p className={styles.small}>Already have an account ? <Link href='/auth/login'><strong style={{ color: '#FF4500' }}>Login</strong></Link></p>
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