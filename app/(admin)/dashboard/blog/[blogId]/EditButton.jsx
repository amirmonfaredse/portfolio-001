import SpinnerLoader from "@/app/utility/SpinnerLoader";

function EditButton({ pending }) {
  return (
    <div className="w-full h-[100px] flex items-center justify-start">
      <button
        disabled={pending}
        className="w-full h-[40px] flex items-center justify-center rounded text-white  bg-folly-600 hover:bg-folly-900  transition duration-400"
      >
        {pending ? <SpinnerLoader /> : "ویرایش"}
      </button>
    </div>
  );
}

export default EditButton;
