import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import { Modal ,Input} from "antd";
import { loadUser } from "../action/authaction";
import "./Profile.css";
import { updateuser } from "../action/useraction";

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [changeprofil, setChangeprofil] = useState({
    firstname: auth.user.firstname,
    lastname: auth.user.lastname,
    bio: auth.user.bio,
  });

  useEffect(() => {
    if (!auth.user) dispatch(loadUser());
  }, [dispatch, auth.user]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (e) => {
    setChangeprofil({ ...changeprofil, [e.target.name]: e.target.value });

    setIsModalVisible(true);
  };

  const handleOk = () => {
    dispatch(updateuser(auth.user._id, changeprofil));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    setChangeprofil({ ...changeprofil, [e.target.name]: e.target.value });
    console.log(changeprofil);
  };

  const [subscribed, setSubscribed] = useState(false);
  const handleclick = () => {
    setSubscribed(!subscribed);
    console.log(subscribed);
  };

  return (
    <div>
      <header>
        <div class="containers">
          <div class="profile">
            <div class="profile-image">
              <img
                src={auth.user.avatar}
                style={{ borderRadius: "50%", width: "300px", height: "300px" }}
                className="imgs"
              />
            </div>

            <div class="profile-user-settings">
              <h1 class="profile-user-name">{auth.user.firstname}</h1>

              <button class="btn profile-edit-btn" onClick={showModal}>
                Edit Profile
              </button>

              <button class="btn profile-edit-btn" onClick={handleclick}>
                {subscribed ? "Follow" : "Unfollow"}
              </button>
            </div>

            <div>
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <label style={{ marginRight: 10 }}>firstname </label>
                <Input
                  placeholder={auth.user.firstname}
                  value={changeprofil.firstname}
                  name="firstname"
                  onChange={handleChange}
                />{" "}
                <br />
                <label style={{ marginRight: 10 }}>lastname </label>
                <Input
                  placeholder={auth.user.lastname}
                  value={changeprofil.lastname}
                  name="lastname"
                  onChange={handleChange}
                />
                <br />
                <label style={{ marginRight: 10 }}>bio </label>
                <Input
                  placeholder={auth.user.bio}
                  value={changeprofil.bio}
                  name="bio"
                  onChange={handleChange}
                />
                <br />
                <br />
                <br />
                <UploadImg />
              </Modal>
            </div>

            <div class="profile-bio">
              <p>
                <span class="profile-real-name">
                  {auth.user.firstname} {auth.user.lastname}:
                </span>{" "}
                {auth.user.bio} 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div class="container">
          <div class="gallery">
            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 56
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 89
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 5
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Gallery</span>
                <i class="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 42
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Video</span>
                <i class="fas fa-video" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 38
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 0
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Gallery</span>
                <i class="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 47
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 94
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 3
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Gallery</span>
                <i class="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 52
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 4
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 66
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Gallery</span>
                <i class="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 45
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 0
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 34
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 41
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 0
                  </li>
                </ul>
              </div>
            </div>

            <div class="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              />

              <div class="gallery-item-type">
                <span class="visually-hidden">Video</span>
                <i class="fas fa-video" aria-hidden="true"></i>
              </div>

              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes">
                    <span class="visually-hidden">Likes:</span>
                    <i class="fas fa-heart" aria-hidden="true"></i> 30
                  </li>
                  <li class="gallery-item-comments">
                    <span class="visually-hidden">Comments:</span>
                    <i class="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="loader"></div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
