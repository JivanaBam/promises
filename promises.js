// ? promise =>

// const loadPosts = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// loadPosts();

const fetchProduct = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

fetchProduct();
