import { HeroList } from "../components/HeroList";
import { heroes } from "../data/heroes"

const data = heroes;

export const DcPage = () => {
    return (
        <>
            <h1>DC COMICS</h1>
            <hr />
            <HeroList publisher={'DC Comics'}></HeroList>
        </>



    )
}
