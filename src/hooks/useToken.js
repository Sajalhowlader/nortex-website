import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const userEmail = { email: email };
    if (email) {
      fetch(`https://intense-brook-95091.herokuapp.com/singIn/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userEmail),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
