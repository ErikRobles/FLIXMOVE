import React from "react"
import Image from "next/image"

// export async function generateStaticParams() {
//   const data = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
//   )
//   const res = await data.json()
//   return res.results.map((movieId) => ({
//     movieId: toString(movieId.id),
//   }))
// }

async function MovieDetail({ params }) {
  const { movieId } = params
  const imagePath = "https://image.tmdb.org/t/p/original"
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  )
  const res = await data.json()
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-700 inline-block p-1 rounded-md my-2">
          {res.status}
        </h2>
        <Image
          src={imagePath + res.backdrop_path}
          className="my-12 w-full rounded-md shadow-md"
          width={800}
          height={800}
          priority
          alt={res.title}
        ></Image>
        <p>{res.overview}</p>
        <p className="mt-3">
          <span className="font-bold">Genres: </span>
          {res.genres?.map((genre, i, arr) => (
            <span key={res.id} className="text-sm tracking-wider">
              {genre?.name}
              {i != arr.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>

        <p className="mt-3">
          <span className="font-bold">Movie&apos;s Country : </span>
          {res.production_countries[0]?.name}
        </p>
      </div>
    </div>
  )
}

export default MovieDetail
