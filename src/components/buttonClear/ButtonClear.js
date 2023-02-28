import { useDispatch } from "react-redux";
import { clearList } from "../../redux/actions/action";






function ButtonClear() {
    const dispatch = useDispatch();
  
    function handleClick() {
      dispatch(clearList());
    }
  
    return <button onClick={handleClick}>Clear</button>;
  }
  
  

  export default ButtonClear