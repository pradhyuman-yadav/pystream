import Image from "next/image";

function Description( {details} ) {
  const IMG_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className='flex flex-col'>
      <div className="flex flex-col content-center">
        {/* Backdrop */}
        <div className="h-96 w-96">
        <div class="bg-scroll"></div>
          Hello
        </div>
        <div className="hidden relative md:block p-2.5">
        <Image layout="responsive"
            src={
                `${IMG_URL}${details.backdrop_path}`
            } height={1080} width={1920} placeholder="blue"
        />
        </div>

        {/* Photo */}
        <div className="p-2.5">
        <Image layout="responsive"
            src={
                `${IMG_URL}${details.poster_path || details.backdrop_path}` ||
                `${IMG_URL}${details.backdrop_path}`
            } height={1920} width={1280}
        />
        </div>

        {/* Details */}
        <div></div>

      </div>
      <div></div>
    </div>
  )
}

export default Description