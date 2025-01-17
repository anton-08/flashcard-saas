import {AppBar, Container, Toolbar, Typography, Box, Button} from  '@mui/material'
import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'

export default function  SignUpPage(){
    return <Container maxWidth = "100vw"> 
        <AppBar position = 'static' sx = {{backgroundColor: "#3f51b5"}}>
            <Toolbar> 
                <Typography variant='h6' sx ={{
                    flexgrow: 1
                }}>
                    Flashcard SaaS
                </Typography>
                <Button color ='inherit'> 
                    <Link href="/sign-in" passHref> 
                    Login
                    </Link>
                </Button>
                <Button color ='inherit'> 
                    <Link href="/sign-up" passHref> 
                    Sign Up
                    </Link>
                </Button>
            </Toolbar> 
        </AppBar>

        <Box
        display = 'flex'
        flexDirection = "column"
        alignItems = 'center'
        justifyContent = 'center'> 
            <Typography variant='h4'> Sign Up</Typography>
            <SignUp/>
        </Box>
    </Container> 
}