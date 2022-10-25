import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/category`)
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className="bg-light p-2">
            <h5>All Categories</h5>
            <div>
                {
                    categories.map(category=><p key={category.id}>
                        <Link to={`/course/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideBar;