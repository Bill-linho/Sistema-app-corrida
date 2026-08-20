import Area from "../components/Area"
import Aside from "../components/aside"
import Header from "../components/Header"
import "../styles/Home.css"

function Home() {
  return (
    <div className="container">
      <Header />
      <Aside />
      <Area />
    </div>
  )
}

export default Home