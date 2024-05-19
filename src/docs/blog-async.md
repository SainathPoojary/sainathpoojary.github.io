# Asynchronous JavaScript

## Problem

In the below-given example we can see that, we are calling `getPost()` function before and after `createPost()` function still “Post Three” is not loading. That’s because, `getPost` gets executed in 1s and `createPost` is called after 2s, after the DOM is painted.

![image](https://github.com/SainathPoojary/SainathPoojary/assets/53347682/e310b6f7-c062-4e9d-9020-1410cbac1062)

## Solution

### Posts Object

```js
const posts = [
  {
    title: "Post One",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Post Two",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];
```

### 1. Using Callback

```javascript
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.map((post) => {
      output += `<h1>${post.title}</h1> ${post.body}\n`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost(
  {
    title: "Post Three",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nisi dicta eligendi velit unde tempora modi quod ratione suscipit! Laboriosam.",
  },
  getPosts
);
```

![image](https://github.com/SainathPoojary/SainathPoojary/assets/53347682/132b69f5-c3c4-4a1c-9f67-781d41091e1a)

### 2. Using Promise

```javascript
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.map((post) => {
      output += `<h1>${post.title}</h1> ${post.body}\n`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      let error = true;
      if (error) reject("Error: Something went wrong");
      else resolve();
    }, 2000);
  });
}

createPost({
  title: "Post Three",
  body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nisi dicta eligendi velit unde tempora modi quod ratione suscipit! Laboriosam.",
}).then(getPosts);
```

![image](https://github.com/SainathPoojary/SainathPoojary/assets/53347682/827e5bd4-3963-4722-a1a1-d94e06b5d850)
![image](https://github.com/SainathPoojary/SainathPoojary/assets/53347682/ed1a4f26-b36c-4bf2-95c1-d419ca44538e)

### 3. Using Async / Await

```javascript
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.map((post) => {
      output += `<h1>${post.title}</h1> ${post.body}\n`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      let error = false;
      if (error) reject("Error: Something went wrong");
      else resolve();
    }, 2000);
  });
}

async function init() {
  // It will wait until createPost is completely executed
  await createPost({
    title: "Post Three",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  });
  getPosts();
}

init();
```

![image](https://github.com/SainathPoojary/SainathPoojary/assets/53347682/75514fb6-b691-431b-8889-dcaf155b0cdd)

### Fetch API using async await

```javascript
const API = "https://jsonplaceholder.typicode.com/users";
async function getUser() {
  const res = await fetch(API);
  const data = await res.json();
  console.log(data);
}

getUser();
```

![image](https://github.com/SainathPoojary/SainathPoojary/assets/53347682/18cb9a00-416d-4dff-ba91-45da51c1c8b2)
