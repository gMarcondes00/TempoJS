function App(){
    const [weather, setWeather] = React.useState(null);
    const [input, setInput] = React.useState('');
    const [city, setCity] = React.useState('');
    const [display, setDisplay] = React.useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8ad00f8bb6ef6d755eec02447995793`;

    React.useEffect(()=>{
        axios.get(url)
            .then(res=>{
                setWeather(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[url])

    const getWeather = () => {
        setCity(input.toLowerCase().replace(/\s/g, "%20"));
        setDisplay(input.toUpperCase());
        axios.get(url)
            .then(res=>{
                setWeather(res.data)
            })
    }
    if(!weather){
    return (
        <div className='header'>
            <div className='card input-box'>
                <h1>Insira o nome da cidade!</h1>
                <input onChange={(e)=>setInput(e.target.value)} type='text' className='cidade'/><br/>
                <button className='btn btn-primary' onClick={() => getWeather()}>Enviar</button>
            </div>
        </div>
    )} else {
        return(
        <div className='header'>
            <div className='card input-box'>
                <h1>Insira o nome da cidade!</h1>
                <input onChange={(e)=>setInput(e.target.value)} type='text' className='cidade'/><br/>
                <button className='btn btn-primary' onClick={() => getWeather()}>Enviar</button>
                <div className='card weather'>
                    <h1>{display}</h1><p>{weather.sys.country}</p><hr/>
                    <h1>{weather.weather.main}</h1>
                    <h1><i className="fa-solid fa-temperature-three-quarters"></i> {Math.round(weather.main.temp -273)}ºC</h1>
                    <h1><i className="fa-solid fa-droplet"></i> {weather.main.humidity}%</h1>
                    <h1><i className="fa-solid fa-wind"></i> {Math.round(weather.wind.speed * 3.6)} km/h</h1>
                </div>
            </div>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));