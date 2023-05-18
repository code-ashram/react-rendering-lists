import './App.css'
import {people} from './data.js'
import {getImageUrl} from './utils.js'

const chemists = people.filter((person) => person.profession === 'chemist')

const everyOneElse = people.filter((person) => person.profession !== 'chemist')

const ListItem = ({person}) => (
    <li>
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

const List = ({title, list}) => (
    <>
        <h2>{title}</h2>
        <ul>
            {list.map((person) => (
                <ListItem key={person.id} person={person}/>
            ))}
        </ul>
    </>
)

const CommonList = () => (
    <article>
        <h1>Scientists</h1>
        <List title="Chemists" list={chemists}/>
        <List title="Other" list={everyOneElse}/>
    </article>
)

export default CommonList
