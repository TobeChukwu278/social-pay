import React from 'react'
import DashBoard from './DashBoard'
import Password from './Password'
import Profile from './Profile'
import Settings from './Settings'

const AccountLinks = () => {
    return (
        <div>
            <DashBoard />
            <Password />
            <Profile />
            <Settings />
        </div>
    )
}

export default AccountLinks
