import { Oswald } from "@next/font/google"
import { Montserrat } from "@next/font/google"
import Movie from "./api/Movie"

const oswald = Oswald({
  weights: [400, 700],
  subsets: ["latin"],
  variable: "--font-oswald",
})

const montserrat = Montserrat({
  weights: [400, 700],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
  return (
    <main>
      <section className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </section>
    </main>
  )
}
