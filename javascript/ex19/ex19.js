const greeting = (name, callback) => {
  console.log("Hello:", name);
  callback();
};

const hello = () => {
  console.log("learn callback...");
};

const hi = () => {
  console.log("say hi...");
};

greeting("Linh", hello);
greeting("Lita", hi);
