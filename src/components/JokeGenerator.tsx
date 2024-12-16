import { useState } from "react"

const JokeGenerator = () => {
    const [jokeString, setJokeString] = useState("")
    const btnTxt = "Click to generate a joke"
    const generateJoke = async () => {
        const response = await fetch(import.meta.env.VITE_GET_JOKE_LIST + '?type=single', {
           method: 'GET',
           headers: {
             "Content-Type": 'application/json'
           }
        })
       const res = await response.json()
       if(res?.joke){
        setJokeString(res.joke)
       }
    }
    return (
        <>
          <div className="container ml50 mt200">
             <h1 className="text-white p10 text-center">Joke Generator using React and Joke API</h1>
             <div className="flex">
                <button className="btn-success" onClick={generateJoke}>{btnTxt}</button>
             </div>
             <p className="text-white p10 text-center fs16">{jokeString}</p>
          </div>
        </>
    )

}

export default JokeGenerator;