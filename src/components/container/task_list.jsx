import React from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task';

const TaskListComponent = () => { 

    const defaultTask = new Task('Example', 'DefaultDescription', true, LEVELS.NORMAL);

    /*changeState = { id } => {

    }*/


    return (
        <div>
            <div>
                Your Tasks:
            </div>
            {/*TODO: aplicar un for/map para renderizar una lista */}
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
