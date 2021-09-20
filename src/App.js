import Questions from './components/Questions'

function App() {
  return (
    <main className="main__container">
      <div className="main__left">
      <h1><span className="q">Questions</span> And <span className="a">Answers</span> About<br></br> <span className="l">Login</span></h1>
      </div>
      <div className= "main__right">
        <Questions />
      </div>
    </main>
  );
}

export default App;
