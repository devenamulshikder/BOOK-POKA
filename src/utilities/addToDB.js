import toast from "react-hot-toast";






const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredLS = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
   toast.error('Already Read this Book!')
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
    toast.success("Yo-hoo you Read this book!")
  }
};


export{addToStoredLS}
