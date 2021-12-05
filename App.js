import html from "./app/core.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Modal from "./components/Modal.js"

function App() {
    return html `
        ${Header()}
        ${Main()}
        ${Modal()}
    `
}
export default App;