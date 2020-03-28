import React from "react"
import useStats from "../utils/useStats"
import IndexPage from "../pages/index"

const Stats = url => {
  console.log(url)
  const stats = useStats(url.url)
  if (!stats) return <p>Loading...</p>
  // console.log(`this is the ${stats}`)
  // console.log(`this is url ${url.url}`)

  return (
    <>
      <div className="statBlock">
        <p>Confirmed:</p>
        <p>{stats.confirmed.value} </p>
      </div>
      <div className="statBlock">
        <p>Recovered:</p>
        <p>{stats.recovered.value}</p>
      </div>
      <div className="statBlock">
        <p>Deaths:</p>
        <p>{stats.deaths.value}</p>
      </div>
    </>
  )
}

export default Stats
