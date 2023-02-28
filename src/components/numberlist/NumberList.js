import { useSelector } from "react-redux";




function NumberList() {
    const numbers = useSelector((state) => state.numbers);
  
    return (
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    );
  }
export default NumberList