import { createContext, useContext, useState } from "react";

const FilterContext = createContext();
export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
    const [ filter, setFilter ] = useState({
        priority: "", agent: "", status: "", timetoclose: "",
    });
    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
};