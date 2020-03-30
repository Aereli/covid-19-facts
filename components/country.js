import useStats from "../utils/useStats"
import { useState } from "react"
import Stats from "./Stats"
import styled from "styled-components"

const Country = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3rem 0 1rem 0;
`
const Select = styled.div`
  /* height: 2rem;
  font-size: 1.5rem; */
`

function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  )
  const [selectionCountry, setSelectionCountry] = useState("USA")
  if (!countries) return <p>Loading...</p>
  if (error) return <p>There is and Error...</p>

  // console.log(`this is new: ${countries.name}`)

  return (
    <div>
      <Country>
        <h2>Showing: </h2>
        <select onChange={e => setSelectionCountry(e.target.value)}>
          {countries.countries.map(country => (
            <option
              selected={selectionCountry === country.iso3}
              key={country.name}
              value={country.iso3}
            >
              {country.name}
            </option>
          ))}
        </select>
      </Country>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectionCountry}`}
      ></Stats>
    </div>
  )
}

export default CountrySelector
Select
