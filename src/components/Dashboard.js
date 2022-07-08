export default function Dashboard() {
    return(
        <div className="dashboard">
            <h1 className="headline">WEATHER</h1>
            <form className="form-container">
                <input type="text" className="input-container" placeholder="enter location"></input>
                <button type="submit" className="btn">?</button>
            </form>
        </div>
    )
}