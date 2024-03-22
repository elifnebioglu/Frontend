import FillButton from "./FillButton";
import React, { useState, useEffect } from "react";


const AccountPage = () => {

    

    return ((
        <div className="wrapper1">
        <form >
          <h1>My Account</h1>
          <div className="text-base font-semibold pl-2">Name</div>
            <div className="input-box">
                <input
                type="text"
                name="login"
                required
                />
            </div>
            <div className="text-base font-semibold pl-2">Email</div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              required
            />
          </div>
          <FillButton text="Change Name And Email" onClick={() => {}} />
          <div
          ></div>
          <div className="text-base font-semibold pl-2">New Password</div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              required
            />
          </div>
          <div className="text-base font-semibold pl-2">Confirm Password</div>
          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              required
            />
          </div>
          <FillButton text="Change Password" onClick={() => {}} />
         
        </form>
      </div>
        )
    );
};

export default AccountPage;
