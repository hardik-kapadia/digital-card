import './styles/style.css'
import Info from "./components/Info.tsx";
import {Paragraphs} from "./components/Paragraphs.tsx";
import Footer from "./components/Footer.tsx";

function App() {

    return (
        <div className="card">
            <Info/>
            <Paragraphs/>
            <Footer/>
        </div>
    )
}

export default App
