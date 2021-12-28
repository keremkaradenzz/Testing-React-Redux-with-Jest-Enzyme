import Header from "./component/header";
import Headline from "./component/headline";
import './app.scss'

const tempArr = [{
    fName: 'kerem',
    lName: 'karadeniz',
    age : 25,
    status: true
}]

function App() {
  return (
    <div className="App">
        <Header />
        <section className="main">
            <Headline header="Title" desc="Click the button to render posts!" tempArr={tempArr}/>
        </section>
    </div>
  );
}

export default App;
