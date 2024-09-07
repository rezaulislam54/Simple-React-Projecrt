import { Bars } from "react-loader-spinner";

const Spinar = () => {
  return (
    <div>
      <Bars
        height="80"
        width="80"
        color="#C74375"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinar;
