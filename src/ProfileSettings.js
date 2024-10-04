import React from 'react';
import './ProfileSettings.css';

const ProfileSettings = () => {
  return (
    <div className="profile-settings">
      <div id='profile_menu'>
        <button class="tab active">Edit Profile</button>
        <button class="tab">Preferences</button>
        <button class="tab">Security</button>
      </div>
      <div className='profile-content'>
        <div className="profile-header">
          <img id="photo_form" src="../svg/Photo_form.svg" alt="Аватар-в-форме" />
        </div>
        <form>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" value="Charlene Reed" />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input type="text" value="Charlene Reed" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value="charlenereed@gmail.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" value="***********************" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" value="1990-01-25" />
          </div>
          <div className="form-group">
            <label>Present Address</label>
            <input type="text" value="San Jose, California, USA" />
          </div>
          <div className="form-group">
            <label>Permanent Address</label>
            <input type="text" value="San Jose, California, USA" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" value="San Jose" />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" value="45962" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" value="USA" />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;