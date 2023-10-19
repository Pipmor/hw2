import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

const App = () => {
    const user = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "SET_USER", payload: { [name]: value } });
    };

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Имя"
                name="name"
                value={user.name}
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="Возраст"
                name="age"
                value={user.age}
                onChange={handleChange}
            />
            <select name="gender" value={user.gender} onChange={handleChange}>
                <option value="male">Мужчина</option>
                <option value="female">Женщина</option>
            </select>
        </div>
    );
};

export default App;
