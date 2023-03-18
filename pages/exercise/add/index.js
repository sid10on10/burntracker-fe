import { Box, Button, Grid, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Image from 'next/Image';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import styles from '../../../styles/exercise/Add.module.css';
import SideBar from '@/components/sidebar';

export default function Add(){
    return (
        <Box sx={{ background: '#F0F0F0', display: 'flex' }}>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, width: '10vw', padding: '30px', backgroundColor: '#F0F0F0', height: '1000px' }}>
                <SideBar/>
            </Box>
            <Box sx={{ width: '90vw', backgroundColor: '#F0F0F0', height: '1000px' }}>
                <Box sx={{ px: '100px', marginTop: '100px', backgroundColor: 'red' }}>
                    <Box sx={{ display: 'flex', float: 'right' }}>
                        <Image src="/exercise/profile.svg" width="54" height="54" alt="burn tracker profile pic" style={{ border: '2px solid #FD6B22', borderRadius: '100px' }}/>
                        <p className={styles.profile_name}>John Doe</p>
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
                                        value={10}
                                        label="10"
                                        onChange={()=>{}}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Weight</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}
                                        label="10"
                                        onChange={()=>{}}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Reps</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}
                                        label="10"
                                        onChange={()=>{}}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker sx={{ width: '700px' }}/>
                                </LocalizationProvider>

                            </Stack>
                        </Box>
                        <Box sx={{ float: 'right', position: 'relative', top: '70px', right: '40px' }}>
                            <Button sx={{
                                background: '#FD6B22',
                                borderRadius: '16px',
                                textTransform: 'capitalize',
                                fontSize:'14px',
                                color:'white',
                                padding: '15px'
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

                    </Box>
                </Box>
            </Box>
            
        </Box>
    )
}