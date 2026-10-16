import { useState } from "react"
import { Link } from "react-router-dom"

export default function Add(){
  const [matricule,Setmatricule]=useState('')
  const [nom,Setnom]=useState('')
  const [date,Setdate]=useState("")
  const [color,Setcolor]=useState("")
  const [voitures,Setvoiture]=useState([])
  function add (){
    Setvoiture([...voitures,{matricule,nom,date,color}])
  }

  return(
    <>
    <input type="text" placeholder="matricule" value={matricule} onChange={(e)=>Setmatricule(e.target.value)} />
    <input type="text" placeholder="Marque" value={nom} onChange={(e)=>Setnom(e.target.value)}/>
    <input type="date" value={date} onChange={(e)=>Setdate(e.target.value)}/>
    <input type="text" placeholder="couleur" value={color} onChange={(e)=>Setcolor(e.target.value)}/>

    <button onClick={add}>ADD</button>
    {voitures.map((item)=>{ 
      return(<p>{item.matricule} | {item.nom} | {item.date} | {item.color}</p>)
    })}
   <button><Link to="/api">next</Link></button>
    </>
  )
}
