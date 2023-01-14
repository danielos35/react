import { getHeroeByPublisher } from "../helpers"

export const HeroList = ({ publisher }) => {

    const heroes = getHeroeByPublisher(publisher);
    return (
        <ul>
            {heroes.map(res => (
                <li key={res.id}>{res.superhero}</li>
            ))}
        </ul>
    )
}
