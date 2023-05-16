import './App.css'
import {people} from './data.js'
import {getImageUrl} from './utils.js'
import {Fragment} from "react";

const CommonList = () => {
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

    const List = ({title, source}) => <Fragment>
        <h2>{title}</h2>
        <ul className="list">{source}</ul>
    </Fragment>

    return (
        <article>
            <h1>Scientists</h1>
            <List title={"Chemists"} source={groupPeople(chemists)}/>
            <List title={"Everyone else"} source={groupPeople(everyOneElse)}/>
        </article>
    )
}

export default CommonList
