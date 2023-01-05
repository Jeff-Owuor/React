import './App.css';
import ContactManager from './ContactManager';
import TodoHooks from './TodoHooks';
import TodoManager from './TodoManager';

function App() {
  let  contacts = ["Mr Umbwaa","Do-Money","Scar-Mkadinali"]
  let phoneNumber = ['0712347656','01153432122','334139894']
  return (
    <div className="App">
           
           <TodoHooks/>
    </div>
  );
}

export default App;
