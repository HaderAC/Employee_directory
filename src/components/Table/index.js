import React, { useState, useEffect, useReducer } from "react";
import TR from "../TR";
import userSearch from "../../utils/API.js";
import Form from "../Form/";


function Table() {
    const [userState, setUserList] = useState([]);



    const ageSort = (state, action) => {
        switch (action) {
            case "asc":
                const usersA = userState;
                usersA.sort(function (a, b) {
                    return a.dob.age - b.dob.age
                });

                setUserList(usersA);
                return "asc";
            case "desc":
                const usersD = userState;
                usersD.sort(function (a, b) {
                    return b.dob.age - a.dob.age
                });

                setUserList(usersD);
                return "desc";

            default:
                return state
        }
    }
    const [ageState, dispatch] = useReducer(ageSort, false);

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
        <div>
            <Form dispatchFunction={dispatch} />

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
        </div>
    );
}

export default Table;
