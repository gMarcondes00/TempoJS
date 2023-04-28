function App(){
    const [city, setCity] = React.useState('');
    const apiId = '&appid=c8ad00f8bb6ef6d755eec02447995793';

    const getWeather = (cityName) => {
        axios.get(`'https://api.openweathermap.org/data/2.5/weather?'q=${cityName}${apiId}`)
            .then(res=>{res.json()})
            .then(res=>console.log(res))
    }

    return (
        <div className='header'>
            <h1>Insira o Nome da cidade!</h1>
            <div className='card'>
                <input onChange={e=>{setCity(e.target.value)}} type='text' className='cidade'/><br/>
                <Search />
                <button className='btn btn-primary' onClick={() => getWeather(city)}>Enviar</button>
            </div>
        </div>
    )
}


const Search = () => {
    
}

ReactDOM.render(<App />, document.getElementById('root'))