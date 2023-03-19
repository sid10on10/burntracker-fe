import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

export default function Logout(){
    const router = useRouter()

    useEffect(()=>{
        window.localStorage.removeItem('accesstoken')
        router.push('/auth/login')
    }, [router])

    return (
        <Box>
            
        </Box>
    )
}