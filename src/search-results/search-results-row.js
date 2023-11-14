import { useHistory } from "react-router-dom";
import "./search-results.css";
import currencyFormatter from "../helpers/currencyFormatter";

const SearchResultsRow = ({ house }) => {
    const history = useHistory();

    const setActive = () => {
        history.push(`/house/${house.id}`);
    };

    return (
        <tr onClick={setActive}>
            <td>{house.address}</td>
            <td>{currencyFormatter.format(house.price)}</td>
            <td>{house.likes}</td>
        </tr>
    );
};
 
export default SearchResultsRow;