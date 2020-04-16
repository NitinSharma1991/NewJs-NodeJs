new Promise((resolve, reject) => {
  console.log("Initial");

  resolve("first");
})
  .then((message) => {
    console.log("Do this " + message);
    throw new Error("Something failed");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
