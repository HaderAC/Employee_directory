import React, { useState, useEffect } from "react";
import TR from "../TR";
import userSearch from "../../utils/API.js";

function Table() {
    const [userState, setUserList] = useState([]);


    useEffect(() => {
        const getUserInfo = async () => {


            const users = [];

            for (let i = 0; i < 15; i++) {
                const data = await userSearch();
                const userInfo = data.data.results[0];
                users.push(userInfo);
            }
            setUserList(users);
            console.log(users);
        }

        getUserInfo();
    }, []);

    return (
        <table className="table-container">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Age</th>
                </tr>
            </thead>

            <tbody>

                {userState.map(user => (
                    <TR
                        key={userState.indexOf(user)}
                        first_name={user.name.first}
                        last_name={user.name.last}
                        phone={user.phone}
                        age={user.dob.age}

                    />

                ))}

            </tbody>
        </table>
    );
}

export default Table;
