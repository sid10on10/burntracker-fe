import { Box, Button, Collapse, Alert, IconButton, TextField } from '@mui/material';
import Image from 'next/Image';

import styles from '../../styles/profile/Profile.module.css';
import SideBar from '@/components/sidebar';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { endpoint, routes } from '../../config';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';

export default function Profile(){
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState(0)
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState('')
    const [dailywater, setDailywater] = useState(0)
    const [dailycalorie, setDailycalorie] = useState(0)
    const [weeklycalorie, setWeeklycalorie] = useState(0)
    const [token, setToken] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

    useEffect(()=>{
        setToken(window.localStorage.getItem('accesstoken'))
        loadProfile(window.localStorage.getItem('accesstoken'))
        // loadUserData(window.localStorage.getItem('accesstoken'))
      }, [])

    async function loadProfile(token){
        try {
            let response = await axios.get(endpoint[endpoint['current']]+routes["profile"]["get"], { headers: { 'authorization': token } })
            console.log(response)
            if(response.status==200){
                setEmail(response.data.data.email)
                setName(response.data.data.name)
                if(response.data.data.profile){
                    setAge(response.data.data.profile.age)
                    setDailycalorie(response.data.data.profile.dailycalorie)
                    setWeeklycalorie(response.data.data.profile.weeklycalorie)
                    setGender(response.data.data.profile.gender)
                    setMobile(response.data.data.profile.mobile)
                    setDailywater(response.data.data.profile.dailywater)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function updateProfile(token){
        try {
            const config = {
                headers: {
                  'Authorization': `${token}`
                }
            }
            let data = {
                name,
                email,
                mobile,
                dailywater,
                age,
                gender,
                dailycalorie,
                weeklycalorie
            }
            let response = await axios.post(endpoint[endpoint['current']]+routes["profile"]["get"], data, config)
            if(response.status==200){
                setError(true)
                setType('success')
                setMessage(response.data.message)
                router.push('/profile')
            }
        } catch (error) {
            setError(true)
            setType('error')
            setMessage('Something went wrong Please try again!')
        }
        
    }

    return (
        <Box sx={{ background: '#F0F0F0', display: 'flex' }}>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, width: '10vw', padding: '30px', backgroundColor: '#F0F0F0', height: '1000px' }}>
                <SideBar/>
            </Box>
            <Box sx={{ width: '90vw', backgroundColor: '#F0F0F0', height: '1000px' }}>
                <Box sx={{ px: '100px', marginTop: '100px', backgroundColor: 'red' }}>
                    <Box sx={{ display: 'flex', float: 'right' }}>
                        <Image src="/exercise/profile.svg" width="54" height="54" alt="burn tracker profile pic" style={{ border: '2px solid #FD6B22', borderRadius: '100px' }}/>
                        <p className={styles.profile_name}>{name}</p>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '200px' }}>
                    <Box>
                        <p className={styles.exercise_heading}>User Profile</p>
                    </Box>
                    <Box>
                        <Image src="/exercise/profile.svg" width="84" height="84" alt="burn tracker profile pic" style={{ border: '2px solid #FD6B22', borderRadius: '100px' }}/>
                        <Image src="/profile/edit.png" width="34" height="34" style={{ position: 'relative', right: '30px' }}/>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '50px' }}>
                    <Box className={styles.list_exercise}>
                        <Box sx={{ display: 'flex', px: '20px', py: '30px' }}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(event)=>{
                                setName(event.target.value)
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
                            }} />
                            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event)=>{
                                setEmail(event.target.value)
                            }} sx={{
                                marginLeft: '20px',
                                width: '100%',  
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FF4500',
                                    },
                                },
                                '& label.Mui-focused': {
                                    color: 'black',
                                }
                            }} />
                        </Box>
                        <Box sx={{ display: 'flex', px: '20px', py: '20px' }}>
                            <TextField id="outlined-basic" label="Mobile" variant="outlined" value={mobile} onChange={(event)=>{
                                setMobile(event.target.value)
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
                            }} />
                            <TextField id="outlined-basic" label="Age" variant="outlined" value={age} onChange={(event)=>{
                                setAge(event.target.value)
                            }} sx={{
                                marginLeft: '20px',
                                width: '100%',  
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FF4500',
                                    },
                                },
                                '& label.Mui-focused': {
                                    color: 'black',
                                }
                            }} />
                        </Box>
                        <Box sx={{ display: 'flex', px: '20px', py: '20px' }}>
                            <TextField id="outlined-basic" label="Gender" variant="outlined" value={gender} onChange={(event)=>{
                                setGender(event.target.value)
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
                            }} />
                            <TextField id="outlined-basic" label="Daily calorie target" variant="outlined" value={dailycalorie} onChange={(event)=>{
                                setDailycalorie(event.target.value)
                            }} sx={{
                                marginLeft: '20px',
                                width: '100%',  
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FF4500',
                                    },
                                },
                                '& label.Mui-focused': {
                                    color: 'black',
                                }
                            }} />
                        </Box>
                        <Box sx={{ display: 'flex', px: '20px', py: '20px' }}>
                            <TextField id="outlined-basic" label="Weekly calorie target" variant="outlined" value={weeklycalorie} onChange={(event)=>{
                                setWeeklycalorie(event.target.value)
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
                            }} />
                            <TextField id="outlined-basic" label="Daily water consumption" variant="outlined" value={dailywater} onChange={(event)=>{
                                setDailywater(event.target.value)
                            }} sx={{
                                marginLeft: '20px',
                                width: '100%',  
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FF4500',
                                    },
                                },
                                '& label.Mui-focused': {
                                    color: 'black',
                                }
                            }} />
                        </Box>
                        <div style={{ marginTop: '20px', marginLeft: '20px' }}>
                            <Collapse in={error} sx={{ width: '405px' }}>
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
                        <Box sx={{ float: 'right', position: 'relative', top: '40px', right: '40px' }}>
                            <Button 
                            onClick={()=>{
                                updateProfile(token)
                            }}
                            sx={{
                                background: '#FD6B22',
                                borderRadius: '16px',
                                textTransform: 'capitalize',
                                fontSize:'14px',
                                color:'white',
                                padding: '15px',
                                '&:hover': {
                                    background: '#FD6B22',
                                }
                            }}>
                                Update Profile
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    )
}