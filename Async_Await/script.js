const getData = async (id) => {
  try {
    const responseUsers = await fetch("./user.json");
    const users = await responseUsers.json();
    const responseUser = await fetch(`./${users[id].id}.json`);
    return await responseUser.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

getData(1)
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
