// import { getByTitle } from "@testing-library/react";
import React from "react";

const NewsItem =(props)=>{
 
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className=" badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
          </div>
        
          <img
            src={
              !imageUrl
                ? "https://idsb.tmgrup.com.tr/ly/uploads/images/2022/01/28/thumbs/800x531/178386.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
