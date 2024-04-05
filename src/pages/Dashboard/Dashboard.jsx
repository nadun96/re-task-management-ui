import React from 'react'
import { authenticated, role } from '../../auth/Auth'
import LeaderDashboard from './LeaderDashboard'
import MemberDashboard from './MemberDashboard'

function Dashboard() {
  return (
    <>
    <div>Dashboard</div>
        <div>
            <div>
                {
                    (authenticated && role === 'admin')?
                    <LeaderDashboard /> : <MemberDashboard />
                }
            </div>
        </div>
    </>

  )
}

export default Dashboard;