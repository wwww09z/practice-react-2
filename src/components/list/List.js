import React, { useState, useCallback } from "react";
import ListItem from "./ListItem";

export default ({ n }) => {
    const [selectedId, setSelectedId] = useState(null);
    const onSelected = useCallback((id) => {
        setSelectedId(id);
    }, []);
    const listItems = [];
    for (let i = 1; i <= n; i++) {
        listItems.push(<ListItem id={i} name={`Item ${i}`} onSelected={onSelected} />)
    }

    return (
        <ul>
            <li>Selected id is {!!selectedId ? selectedId : 'None'}</li>
            {listItems}
        </ul>
    )
};