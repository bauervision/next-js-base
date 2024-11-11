
import {  removeUser } from "@/utils/actions";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DeleteButton({ id }: { id: string }) {
    const removeUserWithId = removeUser.bind(null, id);
    return (
      <form action = {removeUserWithId}>
        <input type="hidden" name="testname" value="ShakeNBake"/>
        <button
          type="submit"
          className="bg-red-500 text-white text-xs rounded p-2"
        >
          delete
        </button>
      </form>
    );
  }
  export default DeleteButton;