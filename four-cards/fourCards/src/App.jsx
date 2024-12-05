
import './App.css'

function App() {

  return (
    <>
      <div className="main-container">
        <div className="container">
          <h2 className="light center title-light" >Realiable, efficient delivery</h2>
          <h1 className="bold center title-bold">Powered by Technology</h1>
          <p className='light center text'>Our Artificial intelligence powered tools use millions of project data points to ensure that your project is successful</p>
          
          <div className="contain-cards">
            <div className="cards supervisor">
              <h2 className="bold">Supervisor</h2>
              <p className='light text-cards'>Monitors activity to identify project roadblocks</p>
              <div className='image'><img src="../images/icon-supervisor.svg" alt="" /></div>
            </div>
              <div className="separar">
                <div className="cards team-builder">
                  <h2 className="bold">Team Builder</h2>
                  <p className='light text-cards'>Scans our talent network to create the optional team for your project</p>
                  <div className="image"><img  src="../images/icon-team-builder.svg" alt="" /></div>
                </div>
                <div className="cards karma">
                  <h2 className="bold">Karma</h2>
                  <p className='light text-cards'>Regularly evaluates our talent to ensure quality</p>
                  <div className="image"><img  src="../images/icon-karma.svg" alt="" /></div>
                </div>
              </div>
              <div className="cards calculator">
                <h2 className="bold">Calculator</h2>
                <p className='light text-cards'>Users data from past projects to provide better delivery estimates</p>
                <div className="image"><img  src="../images/icon-calculator.svg" alt="" /></div>
              </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
