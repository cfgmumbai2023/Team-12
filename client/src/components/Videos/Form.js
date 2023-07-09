import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons-material/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            videoTitle: data.get('videoTitle'),
            description: data.get('description'),
            videoLink: data.get('videoLink'),
            tags: data.get('tags'),
            class: data.get('class'),
            subject: data.get('subject'),
            lessonName: data.get('lessonName'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add Course
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="videoTitle"
                            label="Video Title"
                            id="videoTitle"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            id="description"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="videoLink"
                            label="Video Link"
                            id="videoLink"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="tags"
                            label="Tags"
                            id="tags"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="class"
                            label="Class"
                            id="class"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="subject"
                            label="Subject"
                            id="subject"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lessonName"
                            label="Lesson Name"
                            id="lessonName"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
} 