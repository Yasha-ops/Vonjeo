
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login"
import Dashboard from "./Dashboard"

//to get the url param code!
const code = new URLSearchParams(window.location.search).get("code")

function App() {
    //login if you havent, then render the code dashboard
  return code ? <Dashboard code={code} /> : <Login />
}

export default App