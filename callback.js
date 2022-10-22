
const posts = [
    {title:'Post One',body:'This is post one',createdAt:new Date().getSeconds()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getSeconds()}
]

function getposts() {
    setInterval(() => {
        let output='';
        posts.forEach((post) => {
            output+= `<li>${post.title} last updated ${new Date().getSeconds()-post.createdAt} seconds ago</li>`
        });
        document.body.innerHTML=output;
    }, 1000);
}



function createPost(post,callback) {
    setTimeout(() => {
     posts.push({...post, createdAt:new Date().getSeconds()})
     callback()
    },2000);
    
}

 createPost({title:'Post Three',body:'This is post three'},getposts)

function create4thpost(post,callback) {
  setTimeout(() =>{
   posts.push({...post, createdAt:new Date().getSeconds()})
   callback()
  },4000)
}

create4thpost({title:'Post Four',body:'This is post four'},getposts)