import React from 'react';

const Item = ({ item }) => {
    debugger
    return <li>{item}</li>;
};

export const Topico2 = () => {
    const list = [1, 2, 3, 4, 5];
    return (
        <ul>
            {list.map((item, index) => <Item key={index} item={item} />)}
        </ul>
    );
};
