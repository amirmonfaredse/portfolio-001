import SpinnerLoader from "@/app/utility/SpinnerLoader";

function ReleaseButton({ pending }) {
  return (
    <div className="w-[95%] h-[100px] flex items-center justify-start">
      <button
        disabled={pending}
        className="w-full h-[40px] flex items-center justify-center rounded text-white  bg-avocado-600 hover:bg-avocado-900  transition duration-400"
      >
        {pending ? <SpinnerLoader /> : "انتشار"}
      </button>
    </div>
  );
}

export default ReleaseButton;
