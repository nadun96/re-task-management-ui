import React from 'react'
import CreateTask from '../../components/task/CreateTask';
import TaskList from '../../components/task/TaskList';
import UserList from '../../components/user/UserList';

function LeaderDashboard() {
  return (
    <>
    <div>Leader Dashboard</div>
    <div><CreateTask>Create Task</CreateTask></div>
    <div>
    <div><TaskList></TaskList></div>
    <div><UserList></UserList></div>
    </div>
    </>
  )
}

export default LeaderDashboard;