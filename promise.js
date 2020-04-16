new Promise((resolve, reject) => {
  console.log("Initial");

  reject();
})
  .then(() => {
    console.log("Do this");
    throw new Error("Something failed");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
