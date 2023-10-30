import { useState, useEffect } from "react";


const useHouses = () => {
    const [allHouses, setAllHouses] = useState([]);

    // load data
    useEffect(() => {
      const fetchHouses = async () => {
        const response = await fetch("/api/houses");
        const houses = await response.json();
        setAllHouses(houses);
      };
      fetchHouses();
    }, []);
    
    return allHouses;
}
 
export default useHouses;