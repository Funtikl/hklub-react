import React from 'react';

const Category = () => {
    return (

      <div className="Categroy">

      <ul class="nav">
             <li class="nav-item">
                 <a class="nav-link active_blog_link blog_links" href="blog.html">all posts</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link blog_links" href="Secrets.html">secrets of mountains</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link blog_links" href="birds.html">birds</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link blog_links" href="animals.html">animals</a>
             </li>
             <li>
                 <form class="form-inline search_part">
                     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                     <button class="btn btn-outline-success search_button" type="submit"><i class="fa fa-search"></i></button>
                 </form>
             </li>
         </ul>

      </div>
    );
}

export default Category;
