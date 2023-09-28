
import Searchcomp from "../components/Search_filter/Search"
import Card from "../components/Card/Card"
const Home = () => {
    return (
        <div className="lg:flex lg:justify-between lg:items-start ">
            <div className="mt-[32px] ">
                <Searchcomp />
            </div>

            <div className="lg:w-2/3">
                <Card />
            </div>
        </div>

    )
}

export default Home