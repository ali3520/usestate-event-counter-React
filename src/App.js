import Counter from "./hooks/counterss/Counter";
import UseStates from "./hooks/counterss/Counter"
import UseStatesbasic from "./hooks/useStates/UseStatesbasic";
import Events from "./events/Events";
import ChangeTitle from "./hooks/changetitle/ChangeTitle";

function App (){
  return (
    <>
        <ChangeTitle/>
        <Events/>
        <UseStatesbasic/>
        <UseStates/>
    </>
  );
}

export default App;
