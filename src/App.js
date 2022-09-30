import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import NewPost from "./components/NewPost";

function App() {
    const [user, setUser] = useState(null);

    // Check if user was previously signed in.
    useEffect(() => {
        // Prevent attempting to parse undefined.
        if (localStorage.getItem('user') === undefined || localStorage.getItem('user') === 'undefined') return;

        const localUser = JSON.parse(localStorage.getItem('user'));
        if (localUser) {
            setUser(localUser);
        }
    }, []);

    // Remove signed in user from local storage if there.
    const signOutUser = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <div id="app">
            <div id='navbar'>
                <div>Navbar</div>
                <div>{user ? user.username : 'Sign in to comment!'}</div>
                <button onClick={signOutUser}>Sign Out</button>
            </div>
            <div id='main-content'>

                <SignIn 
                    setUser={setUser}
                />

                <NewPost 
                    user={user}
                />

            </div>


        </div>
    );
}

export default App;
