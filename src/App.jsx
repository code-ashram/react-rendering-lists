import './App.css'
import {recipes} from './data.js'

const ListItem = ({ingredient}) => (
    <li>
        {ingredient}
    </li>
)

const List = ({title, list}) => (
    <div>
        <h2>{title}</h2>
        <ul>
            {list.map((ingredients, index) => (
                <ListItem key={index} ingredient={ingredients}/>
            ))}
        </ul>
    </div>
)

const CommonList = () => (
    <div>
        <h1>Recipes:</h1>
        {recipes.map((recipe) => (
            <List key={recipe.id} title={recipe.name} list={recipe.ingredients}/>
        ))}
    </div>
)

export default CommonList
