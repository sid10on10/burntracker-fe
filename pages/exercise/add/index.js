import { Box, Button, Grid, Stack, Collapse, Alert, IconButton, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import Image from 'next/image';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { endpoint, routes } from '../../../config';
import { useRouter } from 'next/router';

import styles from '../../../styles/exercise/Add.module.css';
import SideBar from '@/components/sidebar';
import { useState, useEffect } from 'react';

export default function Add(){
    const router = useRouter()

    const [reps, setReps] = useState(0)
    const [type, setType] = useState('bodyWeight')
    const [exercise, setExercise] = useState('pushUp')
    const [token, setToken] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [errortype, setErrortype] = useState('success')
    const [rows, setRows] = useState([])
    const [name, setName] = useState('')

    useEffect(()=>{
        setToken(window.localStorage.getItem('accesstoken'))
        loadExercises(window.localStorage.getItem('accesstoken'))
        loadProfile(window.localStorage.getItem('accesstoken'))
    }, [])

    async function loadProfile(token){
        try {
            let response = await axios.get(endpoint[endpoint['current']]+routes["profile"]["get"], { headers: { 'authorization': token } })
            console.log(response)
            if(response.status==200){
                setName(response.data.data.name)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'exercise',
          headerName: 'Exercise name',
          width: 150,
          editable: true,
        },
        {
          field: 'type',
          headerName: 'Exercise type',
          width: 150,
          editable: true,
        },
        {
          field: 'calorie',
          headerName: 'Calorie',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
            field: 'reps',
            headerName: 'Reps',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
          field: 'date',
          headerName: 'Date added',
          description: 'This column has value of date type',
          sortable: false,
          width: 160
        },
    ];

    async function loadExercises(token){
        try {
            let response = await axios.get(endpoint[endpoint['current']]+routes["exercise"]["logs"], { headers: { 'authorization': token } })
            console.log(response)
            if(response.status==200){
                setRows(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function updateExercise(token){
        try {
            const config = {
                headers: {
                  'Authorization': `${token}`
                }
            }
            let data = {
                type,
                exercise,
                reps
            }
            let response = await axios.post(endpoint[endpoint['current']]+routes["exercise"]["add"], data, config)
            if(response.status==200){
                setError(true)
                setErrortype('success')
                setMessage(response.data.message)
                router.push('/exercise/add')
                
            }
        } catch (error) {
            setError(true)
            setErrortype('error')
            setMessage('Something went wrong Please try again!')
        }
        
    }

    const bodyWeight = [
        'pushUp',
        'pullUp',
        'burpee',
        'squat',
        'crunch',
        'plank',
    ]
    const iron = [
        'benchPress',
        'overheadPress',
        'legCurl',
        'neckPress',
        'legPress',
        'latPullDown',
    ]

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
                        <p className={styles.exercise_heading}>Exercise Type</p>
                    </Box>
                    <Box className={styles.add_exercise}>
                        <Box sx={{ position:'relative', top: '50px' }}>
                            <Stack direction="row" sx={{ px: '20px' }} spacing={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        label="Type"
                                        onChange={(event)=>{
                                            setType(event.target.value)
                                        }}
                                    >
                                        <MenuItem value={'bodyWeight'}>BodyWeight</MenuItem>
                                        <MenuItem value={'iron'}>Iron</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={exercise}
                                        label="10"
                                        onChange={(event)=>{
                                            setExercise(event.target.value)
                                        }}
                                    >
                                        {type=='bodyWeight' ? (
                                            bodyWeight.map((item, i)=>(
                                                <MenuItem key={i} value={item}>{item}</MenuItem>
                                            ))
                                        ) : (
                                            iron.map((item, i)=>(
                                                <MenuItem key={i} value={item}>{item}</MenuItem>
                                            ))
                                        )}
                                    </Select>
                                </FormControl>
                                <TextField id="outlined-basic" label="Weight or Reps" type="number" variant="outlined" value={reps} onChange={(event)=>{
                                    setReps(event.target.value)
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
                                }} 
                                InputLabelProps={{ shrink: true }}
                                />

                            </Stack>
                        </Box>
                        <div style={{ float: 'left', marginTop: '70px', marginLeft: '20px' }}>
                            <Collapse in={error} sx={{ width: '355px' }}>
                                <Alert
                                severity={errortype}
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
                        <Box sx={{ float: 'right', position: 'relative', top: '70px', right: '40px' }}>
                            <Button onClick={
                                ()=>{
                                    updateExercise(token)
                                }
                            } sx={{
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
                                Add Exercises
                            </Button>
                        </Box>
                        
                    </Box>
                </Box>
                <Box sx={{ marginTop: '50px' }}>
                    <Box>
                        <p className={styles.exercise_heading}>Exercise Type Listing</p>
                    </Box>
                    <Box className={styles.list_exercise}>
                        <Box sx={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                pagination: {
                                    paginationModel: {
                                    pageSize: 5,
                                    },
                                },
                                }}
                                pageSizeOptions={[5]}
                                checkboxSelection
                                disableRowSelectionOnClick
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    )
}