import React from 'react';


class Profile extends React.Component{
    render(){
        return(
            <div className="Profile">
                <img className="profile-photo" src="https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/22528313_10210028488217957_8043266491767518066_n.jpg?oh=3d75ee14df01c76f133b76954c4920e7&oe=5AF84766"
                    alt="profile-image" />
                <p className="name">Name</p>
                <p className="description">
                Lorem ipsum text interesovanja
                ostala sranja
                Lorem ipsum text interesovanja
                Lorem ipsum text interesovanja
                ostala sranja
                Lorem ipsum text interesovanja
                Lorem ipsum text interesovanja
                ostala sranja
                Lorem ipsum text interesovanja

                </p>
            </div>
        )
    }
}

export default Profile;