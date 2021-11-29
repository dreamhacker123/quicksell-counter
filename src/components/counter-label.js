import react from "react";
import '../component-css/counter.css'

const CounterLabel = (props)=>{
    return(
        <>
        <p className="clabel">Counter Value: {props.value}</p>
        </>
    )
}
export default CounterLabel;