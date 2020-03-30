import React from "react"
import useStats from "../utils/useStats"
import IndexPage from "../pages/index"
import styled from "styled-components"

// colors:
// navyBlue: #18121e
// gunMetal: #233237
// rustyRed: #984b43
// warmYellow: #eac67a

const StatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 5px solid #18121e;
  grid-gap: 0.05rem;
`
const StatBlock = styled.div`
  display: grid;
  text-align: center;
  background-color: #233237;
  color: #eac67a;
  font-family: "Advent Pro", sans-serif;
`

const Stats = url => {
  const { stats, loading, error } = useStats(url.url)
  if (!stats) return <p>Loading...</p>

  return (
    <StatContainer>
      <StatBlock>
        <p>Confirmed:</p>
        <p>{stats.confirmed.value} </p>
      </StatBlock>
      <StatBlock>
        <p>Recovered:</p>
        <p>{stats.recovered.value}</p>
      </StatBlock>
      <StatBlock>
        <p>Deaths:</p>
        <p>{stats.deaths.value}</p>
      </StatBlock>
    </StatContainer>
  )
}

export default Stats
