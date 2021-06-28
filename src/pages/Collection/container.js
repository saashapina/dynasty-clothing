import { connect } from "react-redux";
import { compose } from "redux";

import { WithSpinner } from "../../components/WithSpinner";
import Collection from "./index";

import { selectIsCollectionLoaded } from "../../redux/shop/selectors";

const mapStateToProps = (state) => ({
  isLoading: !selectIsCollectionLoaded(state),
});

export const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);
