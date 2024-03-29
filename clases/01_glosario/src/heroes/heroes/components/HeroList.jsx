import { getHeroeByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heroes = getHeroeByPublisher(publisher);
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {heroes.map(res => (
                <HeroCard key={res.id} {...res} />
            ))}
        </div>
    )
}
