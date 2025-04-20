import React from 'react'
import {useQuery} from 'react-query'
import { makeRequest } from "../../axios";
import './EditProfile.css'
export default function EditProfile() {
    const {isLoading, error, data}=useQuery(['posts'], ()=>
    makeRequest.get("/posts").then((res)=>{
      return res.data
    })
    );
  return (
    <>
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""/></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""/></div>
                    <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
  
    </div>
</div>
<div className="col-md-8 col-lg-6 vstack gap-4">
<div className="card">
  {/* Card header START */}
  <div className="card-header border-0 pb-0">
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        {/* Avatar */}
        <div className="avatar avatar-story me-2">
          <a href="#!">
            {" "}
            <img
              className="avatar-img rounded-circle"
              src="https://social.webestica.com/assets/images/avatar/04.jpg"
              alt=""
            />{" "}
          </a>
        </div>
        {/* Info */}
        <div>
          <div className="nav nav-divider">
            <h6 className="nav-item card-title mb-0">
              {" "}
              <a href="#!"> Lori Ferguson </a>
            </h6>
            <span className="nav-item small"> 2hr</span>
          </div>
          <p className="mb-0 small">Web Developer at Webestica</p>
        </div>
      </div>
      {/* Card feed action dropdown START */}
      <div className="dropdown">
        <a
          href="# "
          className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
          id="cardFeedAction"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-three-dots" />
        </a>
        {/* Card feed action dropdown menu */}
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="cardFeedAction"
        >
          <li>
            <a className="dropdown-item" href="# ">
              {" "}
              <i className="bi bi-bookmark fa-fw pe-2" />
              Save post
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="# ">
              {" "}
              <i className="bi bi-person-x fa-fw pe-2" />
              Unfollow lori ferguson{" "}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="# ">
              {" "}
              <i className="bi bi-x-circle fa-fw pe-2" />
              Hide post
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="# ">
              {" "}
              <i className="bi bi-slash-circle fa-fw pe-2" />
              Block
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="# ">
              {" "}
              <i className="bi bi-flag fa-fw pe-2" />
              Report post
            </a>
          </li>
        </ul>
      </div>
      {/* Card feed action dropdown END */}
    </div>
  </div>
  {/* Card header END */}
  {/* Card body START */}
  <div className="card-body">
    <p>
      I'm thrilled to share that I've completed a graduate certificate course in
      project management with the president's honor roll.
    </p>
    {/* Card img */}
    <img className="card-img" src="https://social.webestica.com/assets/images/post/3by2/01.jpg" alt="Post" />
    {/* Feed react START */}
    <ul className="nav nav-stack py-3 small">
      <li className="nav-item">
        <a
          className="nav-link active"
          href="#!"
          data-bs-container="body"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-html="true"
          data-bs-custom-class="tooltip-text-start"
          data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford"
        >
          {" "}
          <i className="bi bi-hand-thumbs-up-fill pe-1" />
          Liked (56)
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!">
          {" "}
          <i className="bi bi-chat-fill pe-1" />
          Comments (12)
        </a>
      </li>
      {/* Card share action START */}
      <li className="nav-item dropdown ms-sm-auto">
        <a
          className="nav-link mb-0"
          href="# "
          id="cardShareAction"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-reply-fill flip-horizontal ps-1" />
          Share (3)
        </a>
        {/* Card share action dropdown menu */}
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="cardShareAction"
        >
          <li>
            <a className="dropdown-item" href="# ">
              {" "}
              <i className="bi bi-envelope fa-fw pe-2" />
              Send via Direct Message
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="# ">
              {" "}
              <i className="bi bi-bookmark-check fa-fw pe-2" />
              Bookmark{" "}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="# ">
              {" "}
              <i className="bi bi-link fa-fw pe-2" />
              Copy link to post
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="# ">
              {" "}
              <i className="bi bi-share fa-fw pe-2" />
              Share post via …
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="# ">
              {" "}
              <i className="bi bi-pencil-square fa-fw pe-2" />
              Share to News Feed
            </a>
          </li>
        </ul>
      </li>
      {/* Card share action END */}
    </ul>
    {/* Feed react END */}
    {/* Add comment */}
    <div className="d-flex mb-3">
      {/* Avatar */}
      <div className="avatar avatar-xs me-2">
        <a href="#!">
          {" "}
          <img
            className="avatar-img rounded-circle"
            src="https://social.webestica.com/assets/images/avatar/12.jpg"
            alt=""
          />{" "}
        </a>
      </div>
      {/* Comment box  */}
      <form className="nav nav-item w-100 position-relative">
        <textarea
          data-autoresize=""
          className="form-control pe-5 bg-light"
          rows={1}
          placeholder="Add a comment..."
          defaultValue={""}
        />
        <button
          className="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0"
          type="submit"
        >
          <i className="bi bi-send-fill"> </i>
        </button>
      </form>
    </div>
    {/* Comment wrap START */}
    <ul className="comment-wrap list-unstyled">
      {/* Comment item START */}
      <li className="comment-item">
        <div className="d-flex position-relative">
          {/* Avatar */}
          <div className="avatar avatar-xs">
            <a href="#!">
              <img
                className="avatar-img rounded-circle"
                src="https://social.webestica.com/assets/images/avatar/05.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="ms-2">
            {/* Comment by */}
            <div className="bg-light rounded-start-top-0 p-3 rounded">
              <div className="d-flex justify-content-between">
                <h6 className="mb-1">
                  {" "}
                  <a href="#!"> Frances Guerrero </a>
                </h6>
                <small className="ms-2">5hr</small>
              </div>
              <p className="small mb-0">
                Removed demands expense account in outward tedious do.
                Particular way thoroughly unaffected projection.
              </p>
            </div>
            {/* Comment react */}
            <ul className="nav nav-divider py-2 small">
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  {" "}
                  Like (3)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  {" "}
                  Reply
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  {" "}
                  View 5 replies
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Comment item nested START */}
        <ul className="comment-item-nested list-unstyled">
          {/* Comment item START */}
          <li className="comment-item">
            <div className="d-flex">
              {/* Avatar */}
              <div className="avatar avatar-xs">
                <a href="#!">
                  <img
                    className="avatar-img rounded-circle"
                    src="https://social.webestica.com/assets/images/avatar/06.jpg"
                    alt=""
                  />
                </a>
              </div>
              {/* Comment by */}
              <div className="ms-2">
                <div className="bg-light p-3 rounded">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-1">
                      {" "}
                      <a href="#!"> Lori Stevens </a>{" "}
                    </h6>
                    <small className="ms-2">2hr</small>
                  </div>
                  <p className="small mb-0">
                    See resolved goodness felicity shy civility domestic had but
                    Drawings offended yet answered Jennings perceive.
                  </p>
                </div>
                {/* Comment react */}
                <ul className="nav nav-divider py-2 small">
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      {" "}
                      Like (5)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      {" "}
                      Reply
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* Comment item END */}
          {/* Comment item START */}
          <li className="comment-item">
            <div className="d-flex">
              {/* Avatar */}
              <div className="avatar avatar-story avatar-xs">
                <a href="#!">
                  <img
                    className="avatar-img rounded-circle"
                    src="https://social.webestica.com/assets/images/avatar/07.jpg"
                    alt=""
                  />
                </a>
              </div>
              {/* Comment by */}
              <div className="ms-2">
                <div className="bg-light p-3 rounded">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-1">
                      {" "}
                      <a href="#!"> Billy Vasquez </a>{" "}
                    </h6>
                    <small className="ms-2">15min</small>
                  </div>
                  <p className="small mb-0">
                    Wishing calling is warrant settled was lucky.
                  </p>
                </div>
                {/* Comment react */}
                <ul className="nav nav-divider py-2 small">
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      {" "}
                      Like
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      {" "}
                      Reply
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* Comment item END */}
        </ul>
        {/* Load more replies */}
        <a
          href="#!"
          role="button"
          className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          <div className="spinner-dots me-2">
            <span className="spinner-dot" />
            <span className="spinner-dot" />
            <span className="spinner-dot" />
          </div>
          Load more replies
        </a>
        {/* Comment item nested END */}
      </li>
      {/* Comment item END */}
      {/* Comment item START */}
      <li className="comment-item">
        <div className="d-flex">
          {/* Avatar */}
          <div className="avatar avatar-xs">
            <a href="#!">
              <img
                className="avatar-img rounded-circle"
                src="https://social.webestica.com/assets/images/avatar/05.jpg"
                alt=""
              />
            </a>
          </div>
          {/* Comment by */}
          <div className="ms-2">
            <div className="bg-light p-3 rounded">
              <div className="d-flex justify-content-between">
                <h6 className="mb-1">
                  {" "}
                  <a href="#!"> Frances Guerrero </a>{" "}
                </h6>
                <small className="ms-2">4min</small>
              </div>
              <p className="small mb-0">
                Removed demands expense account in outward tedious do.
                Particular way thoroughly unaffected projection.
              </p>
            </div>
            {/* Comment react */}
            <ul className="nav nav-divider pt-2 small">
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  {" "}
                  Like (1)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  {" "}
                  Reply
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  {" "}
                  View 6 replies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      {/* Comment item END */}
    </ul>
    {/* Comment wrap END */}
  </div>
  {/* Card body END */}
  {/* Card footer START */}
  <div className="card-footer border-0 pt-0">
    {/* Load more comments */}
    <a
      href="#!"
      role="button"
      className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
      data-bs-toggle="button"
      aria-pressed="true"
    >
      <div className="spinner-dots me-2">
        <span className="spinner-dot" />
        <span className="spinner-dot" />
        <span className="spinner-dot" />
      </div>
      Load more comments
    </a>
  </div>
  {/* Card footer END */}
</div>
</div>
    </>
  )
}