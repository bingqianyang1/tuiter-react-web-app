import React from "react";

const PostItem = ({post}) => {
    return (

      <li className="list-group-item">

         <div className="row">
           <div className="col">
           <img src={post.avatarIcon} className="rounded-circle" height={60} alt =""/>
         </div>
         <div className="col-10">

             <span className="fw-bold">{post.userName} <i className="bi bi-patch-check-fill text-primary"></i></span>
             <span className="text-secondary"> {post.handle}</span>
             <span className="text-secondary"> · {post.time}</span>
             <i className="bi bi-three-dots float-end text-secondary"></i>
             <br />
             {post.topic}

             <div className="card border border-secondary mt-3">
                 {post.title && post.content ?
                 <>

                 <img src={post.image} className="card-img-top" />
                 <div className="card-body">
                     <span className="card-title"> {post.title} </span>
                     <p className="text-secondary"> {post.content} </p>
                 </div>
                 </>
                 :
                 <img className="card-img-top" src={post.image} alt =""/>
                 }
             </div>

             <div className="row mt-3 mb-2 text-secondary">
               <div className="col-3">
                 <i className="bi bi-chat m-3"></i>
                 {post.comments}
               </div>

               <div className="col-3">
                 <i className="bi bi-arrow-repeat m-3"></i>
                 {post.retuits}
               </div>

               <div className="col-3">
                 <i className="bi bi-heart m-3"></i>
                 {post.likes}
               </div>

               <div className="col-3">
                 <i className="bi bi-upload m-3"></i>
               </div>

             </div>

         </div>


      </div>
    </li>



 );
}
export default PostItem;