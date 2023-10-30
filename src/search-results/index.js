import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import HousesContext from "../context/housesContext";

const SearchResults = () => {
    const { county } = useParams();
    const allHouses = useContext(HousesContext);
    
    const filteredHouses = allHouses.filter((h) => h.county === county);

    return (
        <div className="mt-2">
            <h4>Results for {county}:</h4>
            <table className="table table-hover">
                <tbody>
                    {filteredHouses.map((h) => (
                        <SearchResultsRow key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
 
export default SearchResults;