import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import commentImg from "../assets/all-images/ava-1.jpg";
import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  const greenStyle = { color: '#169658' }; // Define the green color style

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4" style={greenStyle}>{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author" style={greenStyle}>
                    <i className="ri-user-line"></i> {blog.author}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description" style={{color: '#169658', marginTop: '70px'}}>
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description" style={{color: '#169658', marginTop: '70px'}}>
                    <i className="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section__description" style={greenStyle}>{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4" style={greenStyle}>{blog.quote}</blockquote>
                </h6>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5" style={greenStyle}>3 Comments</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment__content">
                    <h6 className="fw-bold" style={greenStyle}>Bill Gates</h6>
                    <p className="section__description mb-0" style={{color: '#169658', marginLeft: '75px', fontSize: '16px'}}>14 July, 2022</p>
                    <p className="section__description" style={{color: '#169658', marginTop: '6px'}}>
                      Very interesting!
                    </p>

                    <span className="replay d-flex align-items-center gap-1" style={{color: '#169658', marginTop: '-30px'}}>
                      <i className="ri-reply-line"></i> Reply
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4 style={greenStyle}>Leave a Comment</h4>
                  <p className="section__description" style={greenStyle}>
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className="d-flex gap-3">
                      <Input type="text" placeholder="Full name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className="fw-bold" style={greenStyle}>Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`} style={greenStyle}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
