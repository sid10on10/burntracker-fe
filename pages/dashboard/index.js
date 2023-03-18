import { Box, Button, Grid, Stack, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import Image from 'next/image';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import styles from '../../styles/dashboard/Dashboard.module.css';
import SideBar from '@/components/sidebar';

export default function Profile(){
    return (
        <Box sx={{ background: '#F0F0F0', display: 'flex' }}>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, width: '10vw', padding: '30px', backgroundColor: '#F0F0F0', height: '1000px' }}>
                <SideBar/>
            </Box>
            <Box sx={{ width: '90vw', backgroundColor: '#F0F0F0', height: '1000px', px: '20px', py: '50px' }}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={8} sx={{ height: '500px' }}>
                        <Box>
                            <p className={styles.welcome_greeting}>Good Morning</p>
                            <p className={styles.welcome_text}>Welcome Back</p>
                        </Box>
                        <Box>
                            <Box sx={{ display: 'flex', justifyContent:'space-evenly', flexDirection: 'row', paddingRight: '10px', marginTop: '180px' }}>
                                <Box sx={{ background: '#1AB0AF', borderRadius: '16px', width: '189px', height: '180px' }}>
                                    <Box sx={{ display: 'flex', px: '40px' }}>
                                        <Image src="/dashboard/running.svg" width="20" height="20" style={{ position: 'relative', top: '20px' }}/>
                                        <p className={styles.card_text}>Steps</p>
                                    </Box>
                                    <p className={styles.steps_text}>2500 <small style={{ fontSize: '16px' }}>Steps</small></p>
                                </Box>
                                <Box sx={{ background: '#FF7545', borderRadius: '16px', width: '189px', height: '180px' }}>
                                    <Box sx={{ display: 'flex', px: '40px' }}>
                                        <Image src="/dashboard/water.svg" width="20" height="20" style={{ position: 'relative', top: '20px' }}/>
                                        <p className={styles.card_text}>Water</p>
                                    </Box>
                                    <Image src="/dashboard/circle1.svg" width="97" height="97" style={{ marginLeft: '40px' }}/>
                                </Box>
                                <Box sx={{ background: '#FA5B7E', borderRadius: '16px', width: '189px', height: '180px' }}>
                                    <Box sx={{ display: 'flex', px: '40px' }}>
                                        <Image src="/dashboard/calories.svg" width="20" height="20" style={{ position: 'relative', top: '20px' }}/>
                                        <p className={styles.card_text}>Calories</p>
                                    </Box>
                                    <Image src="/dashboard/speed-meter.svg" width="97" height="97" style={{ marginLeft: '40px' }}/>
                                </Box>
                                <Box sx={{ background: '#8676FD', borderRadius: '16px', width: '189px', height: '180px' }}>
                                    <Box sx={{ display: 'flex', px: '40px' }}>
                                        <Image src="/dashboard/heart.svg" width="20" height="20" style={{ position: 'relative', top: '20px' }}/>
                                        <p className={styles.card_text}>Heart rate</p>
                                    </Box>
                                    <Image src="/dashboard/heart-rate.svg" width="97" height="97" style={{ marginLeft: '40px' }}/>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} sx={{ height: '500px', backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '30px' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Image src="/exercise/profile.svg" width="54" height="54" alt="burn tracker profile pic" style={{ border: '2px solid #FD6B22', borderRadius: '100px' }}/>
                            <p className={styles.profile_name}>John Doe</p>
                        </Box>
                        <Box className={styles.info_box}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', px: '20px' }}>
                                <Box>
                                    <p className={styles.weight_info}>75 Kg</p>
                                    <p className={styles.info_text}>Weight</p>
                                </Box>
                                <Box>
                                    <p className={styles.weight_info}>6.5</p>
                                    <p className={styles.info_text}>Height</p>
                                </Box>
                                <Box>
                                    <p className={styles.weight_info}>25 yrs</p>
                                    <p className={styles.info_text}>Age</p>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: '50px' }}>
                            <p className={styles.goal_text}>Daily Calorie Goal <strong className={styles.goal_value}>200 kcal</strong></p>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Image src="/dashboard/meter.svg" width="174" height="104" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ marginTop: '100px' }}>
                    <Grid item xs={12} sm={12} md={7}>

                    </Grid>
                    <Grid item xs={12} sm={12} md={5} sx={{ background: '#FFFFFF', borderRadius: '16px', height: '321px', padding: '30px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className={styles.progress_text}>Progress</p>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ width: '50%' }}>
                                <Image src="/dashboard/circle.svg" width="160"  height="160" />
                            </Box>
                            <Box sx={{ width: '50%' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                                    <Image src="/dashboard/1.svg" width="8" height="8"/>
                                    <p className={styles.exercise_type_text}>Cardio</p>
                                    <p className={styles.hour_text}>30 Hrs</p>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Image src="/dashboard/2.svg" width="8" height="8"/>
                                    <p className={styles.exercise_type_text}>Streching</p>
                                    <p className={styles.hour_text}>30 Hrs</p>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Image src="/dashboard/3.svg" width="8" height="8"/>
                                    <p className={styles.exercise_type_text}>Treadmill</p>
                                    <p className={styles.hour_text}>30 Hrs</p>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
        </Box>
    )
}