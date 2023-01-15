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
                            <p className="card-text">{alter_ego}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}