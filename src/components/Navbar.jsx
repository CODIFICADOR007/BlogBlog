import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed-top" style={{ backgroundColor: "#4e5153" }}>
      <nav className="navbar">
        <div>
          <img
            src="imgg3.png" 
            width={60}
            height={60}
            alt="logo"
            className="ms-5"
          />
        </div>
        <Link className="nav-link me-auto" to="/">
          <div className="bg-grey text-white p-2 rounded">
            Home
          </div>
        </Link>
        <div>
          {user && (
            <>
              <span className="pe-4 text-white">
                Signed is as {user.displayName || user.email}
              </span>
              <button
                className="btn btn-primary btn-sm me-3"
                onClick={() => {
                  signOut(auth);
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
