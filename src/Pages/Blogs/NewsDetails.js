import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export const NewsDetails = () => {
  const [newsData, setNewsData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://assignment-ten-server-sage.vercel.app/blog/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch JSON data");
        }
        const data = await response.json();
        setNewsData(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='p-sm-0 p-lg-5  max-w-100 vh-100 max-vh-100 m-5 '>
        <h1>{newsData?.title}</h1>
        <p>{newsData?.desc}</p>
    </div>
  )
}
