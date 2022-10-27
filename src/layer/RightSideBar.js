import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch(`https://assignment-ten-server-sage.vercel.app/category`)
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className="bg-light p-2 shadow">
            <h5 className="mb-3">All Categories</h5>
            <div>
                {
                    categories.map(category=><p key={category.id}>
                        <Link className="text-decoration-none text-danger shadow" to={`/course/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideBar;