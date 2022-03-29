import React from "react";

const Loading = () => {
  return (
    <>
      <div className="text-center">
        <div
          class="spinner-border "
          style="width: 3rem; height: 3rem;"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
