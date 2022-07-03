// put your import statements here


// Define the function component and return the final hierarchy structure response
const Square = (props)=>{
    return (
      <button 
        className="square"
        onClick={()=>props.onClick()}
        >
        {props.value}
      </button>
    )
}


export default Square;