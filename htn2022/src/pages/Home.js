import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
    let navigator = useNavigate();

    const [recipe, setRecipe] = useState("")

    const processChange = async(event) => {
        navigator("/recipe/" + recipe);
    }

    return (
        <div className="Webpage">
            <header className="Title">CookMaster</header>
            <div>
                <form onSubmit={processChange}>
                    <div className="Search-bar">
                        <label className="Search-bar-label">What are you craving today?</label>
                        <div className="Search-bar-margin">
                            <TextField fullWidth id="outlined-basic" label="What's rumbly in your tumbly?" variant="outlined" value={recipe} onChange={(e) => setRecipe(e.target.value)}/>
                        </div>
                    </div>
                    <Button type="submit" variant="contained" id="submit-button">SATISFY YOUR CRAVINGS</Button>
                </form>
            </div>
        </div>
    );
}