import "./styles.scss";
import CollectionItem from "../CollectionItem";
import { Link } from "react-router-dom";

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection_preview">
      <h1 className="title">
        <Link to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
