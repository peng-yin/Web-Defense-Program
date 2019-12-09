export default function request() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: "xxx" });
    }, 1000);
  });
}
