import { useState, useEffect } from "react";
import axios from "axios";


const useHouses = () => {
    const [allHouses, setAllHouses] = useState([]);

    // load data
    useEffect(() => {
      const fetchHouses = async () => {
        const API_URL = process.env.REACT_APP_API_URL;

        const response = await axios.get(`${API_URL}/api/houses`);
        //const houses = await response.json();
        setAllHouses(response.data);
      };
      fetchHouses();
    }, []);
    
    return allHouses;
}
 
export default useHouses;