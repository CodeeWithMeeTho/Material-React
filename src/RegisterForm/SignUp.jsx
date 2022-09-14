import * as React from 'react'
import Typography from '@mui/icons-material/Typography'
import Link from '@mui/material/Link'
import { createTheme } from '@mui/material/styles'

    function Copyright(props){
        return (
            <Typography variant='body2' color='text.secondary' align='center'{...props}>
                    {'Copyright © '}
                    <Link color='inherit' href='https://mui.com/'>
                        Material Desing UI
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
            </Typography>
        )
    }

    const theme = createTheme()

        export default function SignUp() {
            const handleSubmit =(e) => {
                e.preventDefault()
                const data = new FormData(e.currentTarget)
                console.log({
                    email: data.get('email'),
                    password: data.get('password'),
                })
            }
            
        }
        