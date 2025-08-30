import React from 'react'
import { useLocation, useParams } from 'react-router'

const SingleBlog = () => {
    const {title} = useParams();
    const location = useLocation();
    console.log(location);

   
  return (
    <div className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-3">
                            <div className="d-flex align-items-center  mb-4">
                            <img
                          className="rounded-circle blogAvetar me-3"
                          src="https://i.ibb.co/D9dYdq7/user.png"
                          alt="..."
                        />
                                <div className="ms-3">
                                    <div className="fw-bold">{location.state.author}</div>
                                    <div className="text-muted">{location.state.date}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {/* <!-- Post content--> */}
                            <article>
                                {/* <!-- Post header--> */}
                                <header className="mb-4">
                                    {/* <!-- Post title--> */}
                                    <h1 className="fw-bolder mb-1">{location.state.title}</h1>
                                    {/* <!-- Post meta content--> */}
                                    <div className="text-muted fst-italic mb-2">{location.state.readTime}</div>
                                    {/* <!-- Post categories--> */}
                                    <a className="badge bg-secondary text-decoration-none link-light" href="/">{location.state.category}</a>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="/">Freebies</a>
                                </header>
                                {/* <!-- Preview image figure--> */}
                                <figure className="mb-4"><img className="img-fluid rounded" src={location.state.image} alt="..." /></figure>
                                {/* <!-- Post content--> */}
                                <div className="mb-5">
                                    <p className="singleBlogText mb-4">{location.state.content?.slice(0, 300)}</p>
                                    <p className="singleBlogText mb-4">{location.state.content?.slice(301, 600)}</p>
                                    <p className="singleBlogText mb-4">{location.state.content?.slice(601, 1000)}</p>
                                    <p className="singleBlogText mb-4">{location.state.content?.slice(1001, 1500)}</p>
                                    <p className="singleBlogText mb-4">{location.state.content?.slice(1501, 2000)}</p>
                                </div>
                            </article>
                            {/* <!-- Comments div--> */}
                            <div>
                                <div className="card bg-light">
                                    <div className="card-body">
                                        {/* <!-- Comment form--> */}
                                        <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                        {/* <!-- Comment with nested comments--> */}
                                        <div className="d-flex mb-4">
                                            {/* <!-- Parent comment--> */}
                                            <div className="flex-shrink-0 singleBlogAvetar"><img className="rounded-circle" src="https://i.ibb.co/D9dYdq7/user.png" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                                {/* <!-- Child comment 1--> */}
                                                <div className="d-flex mt-4">
                                                <div className="flex-shrink-0 singleBlogAvetar"><img className="rounded-circle" src="https://i.ibb.co/D9dYdq7/user.png" alt="..." /></div>
                                                    <div className="ms-3">
                                                        <div className="fw-bold">Commenter Name</div>
                                                        And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                                    </div>
                                                </div>
                                                {/* <!-- Child comment 2--> */}
                                                <div className="d-flex mt-4">
                                                <div className="flex-shrink-0 singleBlogAvetar"><img className="rounded-circle" src="https://i.ibb.co/D9dYdq7/user.png" alt="..." /></div>
                                                    <div className="ms-3">
                                                        <div className="fw-bold">Commenter Name</div>
                                                        When you put money directly to a problem, it makes a good headline.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Single comment--> */}
                                        <div className="d-flex">
                                        <div className="flex-shrink-0 singleBlogAvetar"><img className="rounded-circle" src="https://i.ibb.co/D9dYdq7/user.png" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default SingleBlog
