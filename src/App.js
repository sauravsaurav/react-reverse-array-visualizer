import React , {useState} from "react";
import Modal from "./components/Modal/Modal";
import ArrayContainer from "./components/ReverseArray/ArrayContainers";
function App() {
  const [modalIsVisible , setModalVisibility] = useState(true);

  const toggleModalHandler = ()=>{
    setModalVisibility(!modalIsVisible);
  }

  return (
    <React.Fragment>
      {modalIsVisible && <Modal onToggleModal={toggleModalHandler}/>}
      {!modalIsVisible && <ArrayContainer/>}
    </React.Fragment>
  )
}

export default App;
