import React, {useState,useEffect} from 'react'
import axios from 'axios'
const Grenoble = () => {
    const [data, setData]= useState([])

    useEffect( ()=>{
        getData()
    }, [])

const getData  =async()=>{
try{
    const res = await axios.get('https:/hubeau.eaufrance.fr/api/v1/temperature/chronique?code_departement=33&sort=desc&size=200&pretty' )
    console.log(res)
    setData(res.data.data)
}catch(error){
    console.log(error)
}

}

  return (
   
                <div className="container mx-auto">
        <h1 className="text-3xl font-bold ">Les derniers relevés de température des cours d'eau du département de la Gironde</h1>


       <div className="grid grid-cols-3 gap-4 ">

        {data.map((item,index) =>(
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-200 dark:border-gray-700 text-center">
        <ul  > 
        <li key={index}>{item.libelle_commune}</li>
        <li>{item.libelle_parametre} : <span className="font-bold"> {parseFloat(item.resultat).toFixed(2)} {item.symbole_unite}</span></li>
        <li >Date:<span className="font-bold"> {item.date_mesure_temp} {item.heure_mesure_temp}</span></li>
        
        </ul>
        </div>
    ))}
    </div>
    </div>

  )
}

export default Grenoble