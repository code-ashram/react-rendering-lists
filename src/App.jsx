import './App.css'
import { people } from './data.js'
import { getImageUrl } from './utils.js'

const List = () => {
  const chemists = people.filter((person) =>
    person.profession === 'chemist'
  )

  const everyOneElse = people.filter((person) =>
    person.profession !== 'chemist'
  )

  const groupPeople = (personCategory) => personCategory.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul className="list">{groupPeople(chemists)}</ul>
      <h2>Everyone else</h2>
      <ul className="list">{groupPeople(everyOneElse)}</ul>
    </article>
  )
}

export default List
