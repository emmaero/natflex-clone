import { useCallback, useEffect, useState } from "react";
import Browser from "./components/shared/Browser";
import Footer from "./components/shared/Footer";
import Modal from "./components/shared/Modal";
import { getDocument } from "./scripts/firestore";
import { useAuth } from "./states/AuthProvider";
import { useUser } from "./states/UserProvider";
import "./styles/style.scss";
function App() {
  // Global state

  const { uid, setIsLogged, isLogged } = useAuth();

  const { setUser } = useUser();

  // Local state
  const [status, setStatus] = useState(0); // 0 pending, 1 ready, 2 error

  // Methods
  const fetchUser = useCallback(
    async (path, uid) => {
      if (uid === "no user") {
        setStatus(1);
      } else if (uid !== "") {
        const user = await getDocument(path, uid);
        setUser(user);
        setIsLogged(true);
        setStatus(1);
      }
    },
    [setIsLogged, setUser]
  );

  useEffect(() => {
    fetchUser("users", uid);
  }, [fetchUser, uid]);

  return (
    <div className="App">
      {status === 0 && <p>loading</p>}
      {status === 1 && <Browser isLogged={isLogged} />}
      {status === 2 && <p>error</p>}
      <Modal />
    </div>
  );
}

export default App;
