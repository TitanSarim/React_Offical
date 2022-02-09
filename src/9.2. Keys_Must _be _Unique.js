import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'

// Keys Must Only Be Unique Among Siblings

function Blog(props){
  const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li>
            {post.title}
          </li>
        )}
      </ul>
  );

const content = props.posts.map((post)=>


            <div key={post.id}>
              <h1>{post.title}</h1>
              <h2>{post.content}</h2>
            </div>
);
return(
  <div>
    {sidebar}
    <hr />
    {content}
  </div>
);

}

const posts = [
  {id: 1, title: 'hellow sarim', content: ' hii iam a software engineer'},
  {id: 2, title: 'hellow Bilal', content: ' hii iam a aerospace engineer'},
]


ReactDOM.render(
  <Blog posts={posts}/>,
  document.getElementById('root')
)