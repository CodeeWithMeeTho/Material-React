import * as React from 'react'
import Typography from '@mui/icons-material/Typography'
import Link from '@mui/material/Link'


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