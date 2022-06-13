import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"

function Results( {results} ) {
  return (
    // <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
    //   {results.map( (result) => (
    //     <Thumbnail key={result.id} result={result}/>
    //   ))}
    // </div>
    <FlipMove className="px-5 my-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 3xl:flex flex-wrap justify-center">
      {results.map( (result) => (
        <Thumbnail key={result.id} result={result}/>
      ))}
    </FlipMove>
  )
}

export default Results