import CardPersonal from "../components/CardPersonal"
import "../styles/Home.css"

function Home() {
  return (
    <div className="container">
      <div className="Header"> 
      <button>login</button>
      </div>
      <div className="insider"> 
        App Saúde
      </div>
      <div className="Home"> 
        < CardPersonal />
      </div>
    </div>
  )
}

export default Home