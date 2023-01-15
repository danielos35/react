import { useParams, Navigate } from "react-router-dom"
import { getHeroByID } from "../helpers";

export const Hero = () => {
    const { heroId } = useParams();
    const hero = getHeroByID(heroId);
    if (!hero) {
        return <Navigate to={'/marvel'} />
    }
    return (
        <div>Hero</div>
    )
}
