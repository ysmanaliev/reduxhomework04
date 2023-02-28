import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNumber } from "../../redux/actions/action";

function InputNumber() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  function handleChange(event) {
    setValue(Number(event.target.value));
  }

  function handleClick() {
    dispatch(addNumber(value));
  }

  return (
    <div>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default InputNumber