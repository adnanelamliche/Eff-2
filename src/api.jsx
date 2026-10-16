import { useState } from "react"

function Employe(){
    const employe = [{
      nom: "Alami",
      prenom: "Sara",
      fonction: "Technicien",
      service: "informatique"
    },
    {
      nom: "Hilali",
      prenom: "Hamza",
      fonction: "Gestionnaire",
      service: "logistique"
    },
    {
      nom: "Chams",
      prenom: "Nabil",
      fonction: "Gestionnaire",
      service: "logistique"
    }
  ]
  const [service,Setservice]=useState("")
  const [recherche,setrecherche]=useState([])

function search() {
    const filter = employe.filter((item) => {
      return item.service === service;
    });

    setrecherche(filter);
  }
  return(
    <>
    <table border="1" cellPadding="10" width="100%">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Fonction</th>
                <th>Service</th>
            </tr>
        </thead>
        <tbody>
            {employe.map((item , i)=>{
                return(
              <tr key={i}>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.fonction}</td>
                <td>{item.service}</td>
              </tr>)
            })}
        </tbody>
    </table>
    <div>
        <input type="text" value={service} onChange={(e)=>Setservice(e.target.value)}/>
        <button onClick={search}>search</button>

          {recherche.map((item, i) => (
          <p key={i}>
            {item.nom} | {item.prenom} | {item.fonction} | {item.service}
          </p>
        ))}
          {recherche.length === 0 && <p>Aucun résultat.</p>}
    </div>
    </>
  )
}
export default Employe