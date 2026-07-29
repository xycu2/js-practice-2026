const promise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 10) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 2000);
  });
};

const one = promise(15);
const two = promise(25);
const three = promise(35);

Promise.all([one, two, three])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
