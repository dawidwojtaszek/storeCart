import "./loading-handler.scss";
export const LoadingHandler = ({ isLoading, isError }) => {
  if (isLoading === true) {
    return (
      <div className="container">
        <div className="loading-text">Loading...</div>
      </div>
    );
  } else {
    if (isError === true) {
      return (
        <div className="container">
          <div className="loading-text">Something went wrong...</div>
        </div>
      );
    }
  }
};
