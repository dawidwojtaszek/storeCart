import "./loading-handler.scss";
import LoadingGif from "../../assets/loading.gif";

export const LoadingHandler = ({ isLoading, isError }) => {
  if (isLoading === true) {
    return (
      <div className="container">
        <div className="loading-box">
          <div className="loading-text">Loading...</div>
          <img src={LoadingGif} alt="loading" id="loading-gif" />
        </div>
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
