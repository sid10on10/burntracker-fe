import { CircularProgress } from "@mui/material";
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

import { endpoint, routes } from '../../config';


export default function withAuth(Component){
    return function AuthProtected(props){
        const router = useRouter()
        const [auth, setAuth] = useState(false)
        const [token, setToken] = useState('')
        const [loading, setLoading] = useState(true)

        useEffect(()=>{
            setToken(window.localStorage.getItem('accesstoken'))
            tokenVerify(window.localStorage.getItem('accesstoken'))
        }, [])

        function tokenVerify(accesstoken){
            let data = {
                headers: {"authorization" : `${accesstoken}`}
            }
            let valid = false
            axios.get(`${endpoint[endpoint['current']]}${routes['auth']['verify']}`, data)
            .then((res)=>{
                console.log(res)
            })
            .catch((error)=>{
                console.log(error)
                if(error.response?.status==401){
                    router.push('/auth/login')
                }
                setLoading(false)
                setAuth(false)
            })
        }

        if(loading){
            return (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div>
                    <CircularProgress sx={{
                        marginTop: '350px'
                    }}
                    />
                  </div>
                </div>
            )
        }else if (!loading && !auth){
            router.push('/auth/login')
        }else if(!loading && auth){
            return <Component {...props}/> 
        }

        
    }
}