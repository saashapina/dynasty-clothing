import React from "react";
import "./style.scss";
import MenuItem from "../MenuItem";
import { connect } from "react-redux";
import { selectDirectoryItems } from "../../redux/directory/selectors";

const mapStateToProps = (state) => ({
  directoryItems: selectDirectoryItems(state),
});

const Directory = ({ directoryItems }) => {
  return (
    <div className="directory">
      {directoryItems.map(({ title, ...otherProps }) => {
        return <MenuItem key={title} title={title} {...otherProps} />;
      })}
    </div>
  );
};

export default connect(mapStateToProps)(Directory);
