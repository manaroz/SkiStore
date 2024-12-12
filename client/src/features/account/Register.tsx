import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import agent from '../../app/api/agent';
import { toast } from 'react-toastify';

const theme = createTheme();

export default function Register() {
    const navigate = useNavigate();

    const {register, handleSubmit, setError, formState: {isSubmitting, errors, isValid}} = useForm({
        mode: 'all'
    });

    function handleApiErrors(errors: any) {
        if (Array.isArray(errors)) {
            errors.forEach((error: string) => handleSingleError(error));
        } else if (typeof errors === 'object') {
            Object.values(errors).forEach((error: any) => {
                if (typeof error === 'string') {
                    handleSingleError(error);
                } else if (Array.isArray(error)) {
                    error.forEach((e: string) => handleSingleError(e));
                }
            });
        } else if (typeof errors === 'string') {
            handleSingleError(errors);
        }
    }

    function handleSingleError(error: string) {
        if (error.includes('Password')) {
            setError('password', {message: error})
        } else if (error.includes('Username')) {
            setError('username', {message: error})
        } else if (error.includes('Email')) {
            setError('email', {message: error})
        } else {
            toast.error(error);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component={Paper} maxWidth="sm" 
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <Box component="form" 
                    onSubmit={handleSubmit((data) => 
                        agent.Account.register(data)
                            .then(() => {
                                toast.success('Registration successful - you can now login');
                                navigate('/login');
                            })
                            .catch(error => {
                                if (error.response && error.response.data) {
                                    handleApiErrors(error.response.data);
                                } else {
                                    toast.error('An unexpected error occurred');
                                }
                            }))} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Username"
                        autoFocus
                        {...register('username', {required: 'Username is required'})}
                        error={!!errors.username}
                        helperText={errors?.username?.message}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Email address"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Not a valid email address'
                            }
                        })}
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: RegExp("(?=^.{6,10}$)(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*s).*$".toString()),
                                message: 'Password does not meet complexity requirements'
                            }
                        })}
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                    />
                    <LoadingButton
                        loading={isSubmitting}
                        disabled={!isValid}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </LoadingButton>
                    <Grid container>
                        <Grid item>
                            <Link to="/login">
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
