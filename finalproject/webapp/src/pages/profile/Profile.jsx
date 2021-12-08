import React, { useEffect } from 'react'
import './profile.scss'
import Leftbar from '../../components/leftbar/Leftbar';
import Middlepart from '../../components/middlepart/Middlepart';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar';
import axios from 'axios'
import { useParams } from 'react-router';

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = React.useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [username]);

    return (
        <div>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">

                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={
                                user.coverPicture
                                    ? PF + user.coverPicture
                                    : PF + "person/noCover.png"
                            } alt="" className="profileCoverImg" />
                            <img src={
                                user.profilePicture
                                    ? PF + user.profilePicture
                                    : PF + "person/noAvatar.png"
                            } alt="" className="profileUserImg" />
                        </div></div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                    <div className="profileRightBottom">
                        <Middlepart username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </div>
    )
}
