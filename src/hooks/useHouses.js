import { useState, useEffect } from "react";
import axios from "axios";


const useHouses = () => {
    const [allHouses, setAllHouses] = useState([]);

    // load data
    useEffect(() => {
      const fetchHouses = async () => {

        const response = await axios.get('https://househunt-api.onrender.com/api/houses/all');
        //const houses = await response.json();
        setAllHouses(response.data);
      };
      fetchHouses();
    }, []);
    
    return allHouses;
}
 
export default useHouses;