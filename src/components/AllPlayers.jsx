import React, { useState } from "react";
import { useGetAllPuppiesQuery } from './PlayersApi';
import { Box, Typography, Grid2, Paper, CircularProgress, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const AllPlayers = () => {
    const { data, error, isLoading } = useGetAllPuppiesQuery();
    const [searchQuery, setSearchQuery] = useState("");

    const players = data?.data?.players || [];

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">404 Puppies not found</Typography>;

    return (
        <Box sx={{ padding: 2}}>
            <Typography variant="h2" gutterBottom>
                All Puppies
            </Typography>
            <Box 
                sx={{ 
                    width: '50%', 
                    margin: '0 auto',  
                    marginBottom: 2,
                    backgroundColor: 'lightblue'
                }}
            >
                <TextField
                    label="Search Player"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Box>
            <Grid2 container spacing={4}>
                {filteredPlayers.map((player) => (
                    <Grid2 item xs={12} sm={6} md={4} key={player.id} width='20%'> 
                        <Paper elevation={3} sx={{ padding: 1, textAlign: 'center'}}> 
                            <Typography variant="h6" fontSize="1.2em">Player: {player.name}</Typography>
                            <Typography variant="body2">Breed: {player.breed}</Typography>
                            {player.imageUrl && (
                                <img
                                    src={player.imageUrl}
                                    alt={player.name}
                                    style={{ width: '100%', borderRadius: '4px', marginBottom: '8px' }} 
                                />
                            )}
                            <Link to={`/players/${player.id}`}>
                                <Button variant="contained">View Details</Button>
                            </Link>                            
                        </Paper>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default AllPlayers;
