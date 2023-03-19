import { Box, Stack } from '@mui/material';
import Image from 'next/image';

import Link from 'next/link';

export default function SideBar(){
    return (
        <Box sx={{ backgroundColor: '#FFFFFF', height: '1000px', borderRadius: '16px' }}>
            <Box>
                <Stack direction="column">
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <Link href="/dashboard">
                            <Image src="/exercise/home.svg" width="30" height="30" alt="burn tracker side menu"/>
                        </Link>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <Link href="/profile">
                            <Image src="/exercise/clock.svg" width="30" height="30" alt="burn tracker side menu"/>
                        </Link>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <Link href="/exercise/add">
                            <Image src="/exercise/run1.png" width="30" height="30" alt="burn tracker side menu"/>
                        </Link>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <Link href="/logout">
                            <Image src="/exercise/logout.svg" width="30" height="30" alt="burn tracker side menu"/>
                        </Link>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}