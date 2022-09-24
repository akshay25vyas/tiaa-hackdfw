import './App.css';
import Slider from './Slider'
import Tabs from "./components/Tabs";

function App() {
    return (
        <div>
            <h1>TIAA Retirement Planning</h1>
            <Tabs>
                <div label="Current Status">
                    See ya later, <em>Alligator</em>!
                </div>
                <div label="Preview Saving">
                    <Slider />
                </div>
            </Tabs>
        </div>
    );
}

export default App;