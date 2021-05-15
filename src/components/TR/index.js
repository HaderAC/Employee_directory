import React from 'react';

const TR = ({first_name, last_name, phone, age}) => {
    return (
        <tr>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{phone}</td>
        <td>{age}</td>
    </tr>
    );
};

export default TR;
