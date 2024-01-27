import React from "react";
export default React.memo(({ id, name, onSelected }) => {
    console.log('List item rerendered!');
    return <li onClick={() => onSelected(id)}>id: {id}, name: {name}</li>
});