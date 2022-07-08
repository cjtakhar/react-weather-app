import { useState } from 'react';

export default function Dashboard() {
    const [location, setLocation] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <div className="dashboard">
            <h1 className="headline">WEATHER</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <input type="text" onChange={e => setLocation(e.target.value)} className="input-container" placeholder="enter location"></input>
                <button type="submit" className="btn">?</button>
            </form>
        </div>
    )
}