import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
  const data = useLoaderData()
   
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/raushan74')
  //     .then(response => response.json()) // Add () after response.json
  //     .then(data => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      public repos: {data.public_repos}
      <img src={data.avatar_url} alt='picture' />
    </div>
  );
}

export default Github;

// optimisise technique
// when we are clicking on github button ...data is fetched before using useEffect

export const githubInfoLoader = async()=>{
  
  const response = await fetch('https://api.github.com/users/raushan74')
  return response.json();
}

