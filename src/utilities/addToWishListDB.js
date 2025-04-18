import toast from "react-hot-toast";

const getStoredWishList = () => {
  const storedBookWishList = localStorage.getItem("wishList");
  if (storedBookWishList) {
    const storedWishListData = JSON.parse(storedBookWishList);
    return storedWishListData;
  } else {
    return [];
  }
};

const addToStoredWishListLS = (id) => {
  const storedWishListData = getStoredWishList();
  if (storedWishListData.includes(id)) {
    toast.error("You are already added this item to Wish List!");
  } else {
    storedWishListData.push(id);
    const data = JSON.stringify(storedWishListData);
    localStorage.setItem("wishList", data);
    toast.success("This Book Successfully Added to your wish list!");
  }
};

export{addToStoredWishListLS}