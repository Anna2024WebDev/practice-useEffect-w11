import { useState, useEffect } from 'react'

export const Countries = () => {
  const [countryCode, setCountryCode] = useState("AU")
  const [data, setData] = useState(null)

  const URL = `https://restcountries.com/v2/alpha/${countryCode}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData()
  }, [countryCode])
  
  const handleChange = (e) => {
    setCountryCode(e.target.value);
  }

  return (
    <section className="light">
      <header>
        <h2>Country Info:</h2>
        <label htmlFor="country">Select a country:</label>
        <div>
          <select id="country" value={countryCode} onChange={handleChange}>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
          </select>
        </div>
      </header>

      {data && (
        <div>
          <h3>{data.name}</h3>
            <p>Capital: {data.capital}</p>
        </div>
      )}
    </section>
  )
}
