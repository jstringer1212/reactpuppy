import React from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { useGetPuppyQuery, useDeletePuppyMutation } from './PlayersApi'; 
import { Box, Typography, Paper, CircularProgress, Button } from '@mui/material';

const SinglePlayer = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const { data, error, isLoading } = useGetPuppyQuery(id); 

    const [deletePuppy] = useDeletePuppyMutation(); 

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Error fetching puppy details</Typography>;
    
    const player = data?.data?.player; 
    if (!player) return <Typography color="error">Puppy not found</Typography>;

    const handleDelete = async () => {
        try {
            await deletePuppy(player.id).unwrap(); 
            navigate('/allplayers'); 
        } catch (error) {
            console.error('Failed to delete the puppy:', error);
        }
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Puppy Details
            </Typography>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">Player: {player.name}</Typography>
                <Typography variant="body2">Breed: {player.breed}</Typography>
                {player.imageUrl && (
                    <img
                        src={player.imageUrl}
                        alt={player.name}
                        style={{ width: '100%', borderRadius: '4px', marginBottom: '8px' }} 
                    />
                )}
                <Typography variant="body1">Additional details about the puppy can go here.</Typography>
                <Button variant="contained" onClick={() => window.history.back()}>
                    Go Back
                </Button>
                <Button variant="contained" color="error" onClick={handleDelete} sx={{ marginLeft: 2 }}>
                    Delete Player
                </Button>
            </Paper>
        </Box>
    );
};

export default SinglePlayer;
