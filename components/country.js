import useStats from "../utils/useStats"
import { useState } from "react"
import Stats from "./Stats"

function CountrySelector() {
  const countries = useStats("https://covid19.mathdro.id/api/countries")
  const [selectionCountry, setSelectionCountry] = useState("USA")
  if (!countries) return <p>Loading...</p>

  console.log(countries)
  return (
    <div>
      <h2>currently showing: {selectionCountry}</h2>
      <select onChange={e => setSelectionCountry(e.target.value)}>
        {countries.countries.map(country => (
          <option key={country.name} value={country.iso3}>
            {country.name}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectionCountry}`}
      ></Stats>
    </div>
  )
}

export default CountrySelector
