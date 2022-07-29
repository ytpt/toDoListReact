import React, {useState} from "react";
import s from './tasks.module.css'
import Btn from "../img/close-icon.png";
import {addTaskAC} from "../redux/reducers/tasks";
import {useDispatch} from "react-redux";

const HighTasks = ({highList}) => {

    const listItems = highList.map((task) =>
        <li key={task.id}>
            <input type={"radio"} />
            <p>{task.name}</p>
            <button
                className={s.cross}
                type={'button'}
                onClick={() => {
                    dispatch(addTaskAC(task))
                    setTask('')
                }}>
                <img src={Btn}/>
            </button>
        </li>
    );

    const dispatch = useDispatch();

    const [task, setTask] = useState();

    return (
        <div className={s.container}>
            <h2>High</h2>
            <div className={s.addHighTask}>
                <input
                    type={"text"}
                    onChange={(e) => setTask(e.target.value)}
                    value={task}/>
                <button type={'button'}>
                    <img src={Btn}/>
                </button>
            </div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default HighTasks;