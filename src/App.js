import Counter from "./hooks/counterss/Counter";
import UseStates from "./hooks/counterss/Counter"
import UseStatesbasic from "./hooks/useStates/UseStatesbasic";
import Events from "./events/Events";
import ChangeTitle from "./hooks/changetitle/ChangeTitle";
import Birthday from "./hooks/birthday/Birthday";


function App (){
  return (
    <>
        <Counter/>
        <Birthday/>
        <ChangeTitle/>
        <Events/>
        <UseStatesbasic/>
        <UseStates/>
    </>
  );
}

export default App;
