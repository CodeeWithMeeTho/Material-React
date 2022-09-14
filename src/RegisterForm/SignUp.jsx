import  * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/icons-material/Typography'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'


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
                return (
                    <ThemeProvider theme={theme}>
                        <Container component='mains' maxWidth='xs'>
                            <CssBaseline />
                            <Box 
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            >
                                <Avatar sx={{ m: 2, bgcolor: 'secondary.mains' }}>
                                <LockOutlinedIcon />
                                </Avatar>
                                <Typography component='h2' variant='h5'>
                                    Sign Up
                                </Typography>
                            </Box>
                        </Container>
                    </ThemeProvider>
                )
        }

        