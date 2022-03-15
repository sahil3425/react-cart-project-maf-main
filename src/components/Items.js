
import { useContext } from "react";
import { CartContext } from "./Cart.js";
import { Card } from "antd";
import "antd/dist/antd.css";
import { PlusOutlined, DeleteOutlined, MinusOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Items = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <>
      <Card
        className="card"
        style={{ width: "30%" }}
        cover={
          <img alt="example" src={img} style={{ height: 200, width: 200 }} />
        }
        actions={[
          <PlusOutlined
            onClick={() => {
              increment(id);
            }}
            key="setting"
          />,
          <p>{quantity}</p>,
          <MinusOutlined
            onClick={() => {
              decrement(id);
            }}
            key="ellipsis"
          />,
          <DeleteOutlined
            onClick={() => {
              removeItem(id);
            }}
          />,
        ]}
      >
        <Meta title={title} description={description} />
        <Meta description={`Price: ${price} Rs `} />
      </Card>
    </>

    /* <div className="items-info">
        <div className="product-img">
          <img src={img} alt="item" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <RemoveIcon
            className="fas fa-minus"
            style={{ fontSize: "20px" }}
            onClick={() => decrement(id)}
          />
          <input type="text" placeholder={quantity} />
          <AddIcon
            className="fas fa-plus"
            style={{ fontSize: "20px" }}
            onClick={() => increment(id)}
          />
        </div>
        <div className="price">
          <h3>{price}rs</h3>
        </div>
        <div className="remove-item">
          <DeleteIcon
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
            style={{ fontSize: "20px" }}
          />
        </div>
      </div> */
    /* <hr /> */
  );
};

export default Items;
