import { useHistory } from "react-router-dom";
import { useContext } from "react";
import HousesContext from "../context/housesContext";

const HouseFilter = () => {
    const history = useHistory();
    const allHouses = useContext(HousesContext);

    const counties = allHouses
    ? Array.from(new Set(allHouses.map((h) => h.county)))
    : [];
    counties.unshift(null);
    
    const onSearchChange = (e) => {
        const county = e.target.value;
        history.push(`/searchresults/${county}`);
    }

    return (
        <div className="row mt-3">
        <div className="offset-md-2 col-md-4">
            Look for your dream house in county:
        </div>
        <div className="col-md-4 mb-3">
            <select className="form-select" onChange={onSearchChange}>
                {counties.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>
        </div>
      </div>
    );
}
 
export default HouseFilter;