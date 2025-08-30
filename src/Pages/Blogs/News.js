import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

export const News = () => {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://assignment-ten-server-sage.vercel.app/blog"
            );
            if (!response.ok) {
              throw new Error("Failed to fetch JSON data");
            }
            const data = await response.json();
            setBlogData(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>
        <h1>This is news</h1>
        {/* <!-- News item--> */}
        {blogData?.map((data) => {
            console.log(data)
                const {id, title} = data
                return (
                  <div key={id} className="mb-4">
                    <div className="small text-muted">May 12, 2023</div>
                    <Link className="link-dark" to={`/news/${id}`}>
                      <h3>{title}</h3>
                    </Link>
                  </div>
                );
              })}
    </div>
  )
}
