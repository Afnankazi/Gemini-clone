import React from 'react'
import Sidebar from '../components/Sidebar'
import Chatpage from '../components/Chatpage'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const ChatApp = () => {
    const location = useLocation()
    const { user, isLoading } = useAuth0();

    if (isLoading || !user) {
        return <div>Loading...</div>;
    }

    // Decode the URL parameter and clean up both strings for comparison
    const urlSubId = decodeURIComponent(location.pathname.split('/').pop());
    const userSubId = user.sub.replace('auth0|', ''); // Remove auth0| prefix if present

    console.log('URL Sub:', urlSubId);
    console.log('User Sub:', userSubId);

    if (urlSubId !== userSubId) {
        console.log("User ID mismatch");
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <div className="grid grid-cols-[1fr_60fr]">
                <Sidebar />
                <Chatpage location={location} />
            </div>
        </div>
    )
}

export default ChatApp
