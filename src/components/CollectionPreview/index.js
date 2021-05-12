import "./styles.scss";
import { CollectionItem } from "../CollectionItem";

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection_preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};
