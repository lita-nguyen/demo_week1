const doSomething = () => {
  const a = 10,
    b = 1;

  if (b === 0) {
    throw new Error("Thuc hien chia cho 0");
  }
  return a / b;
};

try {
  doSomething();
} catch (error) {
  console.log(error);
} finally {
  console.log("Run final");
}
