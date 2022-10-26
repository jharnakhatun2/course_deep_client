import React from 'react';
import { Link, useLoaderData } from "react-router-dom";

const Blogs = () => {
    const blogData = useLoaderData();
 
    return (
        <div className='Blogs m-4 p-5'>
                <h2 className='text-center mt-3 topicHeader'>What's <span className='text-warning'>new</span> ?</h2>
                <hr  className='w-25 mx-auto '/>
            <section>
                {
                    blogData.map((blog) => {
                        const { id, title, desc } = blog
                        return <article className="card shadow border-0 p-3" key={id}>
                            <div className="card-body mt-">
                                <h4 className="topicHeader">{title}</h4>
                                <p className="cardDesc">{desc.length < 400 ? desc : desc.slice(0, 400)}</p>
                                <Link to={`/blog/${id}`} className="cardFooter">Learn More...</Link>
                            </div>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Blogs;