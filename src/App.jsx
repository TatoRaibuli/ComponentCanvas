import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Components/Header/Header.jsx";
import CodeBox from "./Components/Main/CodeBox.jsx";
import CustomComponents from "./Components/Pages/CustomComponents.jsx";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<CodeBox/>}/>
                    <Route path="/custom" element={<CustomComponents/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
