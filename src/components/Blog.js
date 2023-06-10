import React from 'react';
import {useLoaderData } from "react-router-dom";

const Blog = () => {
    const singleBlogData = useLoaderData();
    const { _id, title, desc } = singleBlogData;
    return (
        <div key={_id} className="w-75 mx-auto p-5 m-5">
            <h3 className="mb-4 topicHeader">{title}</h3>
            <p className="cardDesc">{desc}</p>
        </div>
    );
};

export default Blog;