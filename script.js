const goods = [
  { title: "PS5", price: 30000, id: 1},
  { title: "IPhone 12", price: 100000, id: 2},
  { title: "Shirt", price: 1000, id: 3},
  { title: "XBOX", price: 50000, id: 4},
  { title: "Boots", price: 5000, id: 5},
];

const main = () => {
  const createGoodsItemTemplate = ({
    title,
    price,
    id,
  }) => `<div class="goods-item">
    <img src="img/item${id}.jpg" alt="picture">
    <h3>${title}</h3>
    <p>${price}</p>
</div>`;

  const renderGoods = (items) => {
    const goodsItemsList = items
      .map((item) => createGoodsItemTemplate(item))
      .join("");
    console.log(goodsItemsList);
    document.querySelector(".goods-list").innerHTML = goodsItemsList;
  };

  renderGoods(goods);
};

window.addEventListener("load", main);
