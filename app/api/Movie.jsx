import React from "react"
import Link from "next/link"
import Image from "next/image"

function Movie({ title, id, release_date, poster_path }) {
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={600}
          height={600}
          className="rounded-md hover:scale-105 transition duration-300 ease-in-out hover:translate-y-3"
        />
      </Link>
    </div>
  )
}

export default Movie
