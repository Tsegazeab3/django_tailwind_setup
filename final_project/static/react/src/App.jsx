import './App.css'
import { useState } from 'react'

function Header(props) {
  return (
    <h1>{props.name}'s kitchen</h1>
  );
}
function Main(props) {
  return (
    <h1>{props.name}'s kitchen</h1>
  );
}
function Footer(props) {
  return (
    <h1>{props.name}'s kitchen</h1>
  );
}
function App() {
  const [status, setStatus] = useState(true);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
export default App;
