import { connect } from "react-redux";
import { compose } from "redux";

import CollectionOverview from "./index";
import { WithSpinner } from "../../components/WithSpinner";

import { selectIsCollectionFetching } from "../../redux/shop/selectors";

const mapStateToProps = (state) => ({
  isLoading: selectIsCollectionFetching(state),
});

export const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

// export const CollectionOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionOverview)
// );
