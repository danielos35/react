import { Link } from "react-router-dom"

const CharactersByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>)
    return (<>{characters}</>)
}

export const HeroCard = ({

    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

}) => {

    const path = `/assets/heroes/${id}.jpg`
    return (
        <div className="col">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={path} className="card-img" alt={superhero} />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            <CharactersByHero characters={characters} alter_ego={alter_ego}></CharactersByHero>
                            <Link to={`/hero/${id}`}>
                                Mas info...
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
