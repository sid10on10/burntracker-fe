import { Box, Button, Checkbox, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import Link from 'next/link';

import styles from '../../../styles/login/Login.module.css';

export default function Register(){


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                                <TextField id="outlined-email" type="email" variant="outlined"  sx={{ 
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
                                <TextField id="outlined-firstname" type="password" variant="outlined"  sx={{ 
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
                            <Box sx={{ marginTop: '20px' }}>
                                <Button variant="contained" sx={{ 
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
                                <p className={styles.small}>Don’t have an account? <strong style={{ color: '#FF4500' }}>Register</strong></p>
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