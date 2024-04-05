import React from 'react'
import Auth from '../../auth/Auth'
import LeaderDashboard from './LeaderDashboard'
import MemberDashboard from './MemberDashboard'


function Dashboard() {
  return (
    <>
    <div>Dashboard</div>
        <div>
            <div>
                {
                    (Auth.authenticated && Auth.role === 'admin')?
                    <LeaderDashboard /> : <MemberDashboard />
                }
            </div>
        </div>
    </>

  )
}

export default Dashboard;