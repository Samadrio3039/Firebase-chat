import logo from './logo.svg';
import './App.css';
import AuthGuard from './AuthGuard';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
  console.log(`meta ${import.meta.env}`)
  },[])
  return (
    <div className="App">
     {/* <AuthGuard />
      */}
      {/* {import.meta.env.API_KEY} */}
    </div>
  );
}

export default App;
