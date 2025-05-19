import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const username = "soni-dhruv";
  const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/soni-dhruv")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center m-4 bg-cyan-600 text-black p-4 text-3xl">
      Live Github followers of {username}: {data.followers}
      <img src={data.avatar_url} alt="Git photo" width={200} />
    </div>
  );
}

export default Github

export const githubInfoLoader = async () => {
 const response =  await fetch("https://api.github.com/users/soni-dhruv");
 return response.json();
};
