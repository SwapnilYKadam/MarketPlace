// import img1 from "./../images/camera.jpg";
// import img2 from "./../images/phone.jpg";
// import img3 from "./../images/alexa.jpg";

const getUniqueId = () => Math.floor(Math.random() * 1000);

export const ProductList = [
  {
    Id: getUniqueId(),
    title: "Cannon Eos 80D DSLR Camera",
    price: 929.99,
    // img: img1,
    img: "https://images.unsplash.com/photo-1499696786230-3ebd9d0d6fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    rating: 4.6,
  },
  {
    Id: getUniqueId(),
    title: "Iphone 11 pro 256gb",
    price: 599.99,
    // img: img2,
    img: "https://images.unsplash.com/photo-1603898037225-1bea09c550c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGlwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    rating: 5,
  },
  {
    Id: getUniqueId(),
    title: "Alexa",
    price: 299.99,
    // img: img3,
    img: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWxleGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    rating: 3.9,
  },
  {
    Id: getUniqueId(),
    title: "Cannon Eos 80D DSLR Camera",
    price: 929.99,
    // img: img1,
    img: "https://images.unsplash.com/photo-1499696786230-3ebd9d0d6fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    rating: 4.6,
  },
  {
    Id: getUniqueId(),
    title: "Iphone 11 pro 256gb",
    price: 599.99,
    // img: img2,
    img: "https://images.unsplash.com/photo-1603898037225-1bea09c550c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGlwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    rating: 5,
  },
  {
    Id: getUniqueId(),
    title: "Alexa",
    price: 299.99,
    // img: img3,
    img: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWxleGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    rating: 3.9,
  },
];
