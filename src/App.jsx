import { useEffect, useState } from 'react'
import Elections from './components/Elections'
import SelectOne from './components/SelectOne'
import { getCandidates } from './services/candidates.service'
import { getCities } from './services/cities.service'
import { getElections } from './services/elections.service'

export default function App() {
  // const cities = [
  //   { name: 'New York', value: 'new-york' },
  //   { name: 'Los Angeles', value: 'los-angeles' },
  // ]

  const [cities, setCities] = useState(null)
  const [candidates, setCandidates] = useState(null)
  const [elections, setElections] = useState(null)

  const [selectedCity, setSelectedCity] = useState(null)
  const [filteredElections, setFilteredElections] = useState(null)

  useEffect(
    () =>
      (async () => {
        setCities(await getCities())
      })(),
    []
  )

  useEffect(
    () =>
      (async () => {
        setCandidates(await getCandidates())
      })(),
    []
  )

  useEffect(() => {
    if (cities && candidates) {
      ;(async () => {
        let elections = await getElections()

        elections = elections.map((e) => ({
          ...e,
          city: cities.find((c) => c.id === e.cityId),
          candidate: candidates.find((c) => c.id === e.candidateId),
        }))

        setElections(elections)
      })()
    }
  }, [cities, candidates])

  useEffect(() => {
    if (cities) {
      setSelectedCity(cities[0])
    }
  }, [cities])

  useEffect(() => {
    if (elections && selectedCity) {
      setFilteredElections(
        elections.filter((e) => e.city.id === selectedCity.id)
      )
    }
  }, [elections, selectedCity])

  function handleSelectedCity(selectedCity) {
    setSelectedCity(selectedCity)
  }

  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">React Elections</h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <div>
            {cities && (
              <SelectOne
                label="Select one city:"
                options={cities}
                onSelect={handleSelectedCity}
              />
            )}
          </div>
          <div>
            {filteredElections && (
              <Elections city={selectedCity} elections={filteredElections} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
