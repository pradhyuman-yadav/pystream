import { useRouter } from "next/router"
import Header from "../../components/Header/Header"
import Description from "../../components/Description/Description"

export default function details( {results} ) {

  return (
    <div className="flex justify-center">
      <div className="flex-auto max-w-screen-3xl">
        <Header />
        <div>
          <Description details={results}/>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){

  // console.log(context.query)
  const API_KEY = process.env.TMDB_API_KEY_v3
  const request = await fetch(`https://api.themoviedb.org/3/${context.query.Slug}/${context.query.id}?api_key=${API_KEY}`
                              ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
}

