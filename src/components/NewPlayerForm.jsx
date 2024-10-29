import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddPuppyMutation } from './PlayersApi'; // Adjust the import if necessary
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';

const NewPlayerForm = () => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();
    const [addPuppy, { isLoading }] = useAddPuppyMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPuppy = { name, breed, imageUrl };

        try {
            await addPuppy(newPuppy).unwrap();
            navigate('/allplayers'); // Redirect to the players list after adding
        } catch (error) {
            console.error('Failed to add the puppy:', error);
        }
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Add New Puppy
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" type="submit" disabled={isLoading}>
                    {isLoading ? <CircularProgress size={24} /> : 'Add Puppy'}
                </Button>
            </form>
        </Box>
    );
};

export default NewPlayerForm;
