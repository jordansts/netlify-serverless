const result = document.querySelector('.result');

const fetchData = async () => {
    console.log('fetch data logged')
    try{
        const {data} = await axios.get('/api/hello');
        result.textContent = data
    }catch (error){
        alert(error.response.data)
        result.textContent = error.response.data
    }
}

fetchData()
