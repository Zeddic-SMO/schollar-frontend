const DeleteAccount = () => {
  return (
    <div>
      <p className="font-ManropeRegular text-BrandGray700 text-[16px] mb-5">
        When you delete your account, your public profile will be deactivated
        immediately. If you change your mind before the 14 days are up, sign in
        with your email and password, and we’ll send you a link to reactivate
        your account.
      </p>

      <p className="flex gap-2 items-center font-ManropeRegular text-BrandGray700 text-[16px] mb-5">
        <input type="checkbox" id="delete" />
        <label htmlFor="delete">Yes, I want to delete my account.</label>
      </p>

      <button className="bg-red-500 text-white font-ManropeRegular py-2 px-4 rounded-md text-[14px] hover:bg-red-400 mb-10">
        Delete
      </button>

      <hr />
    </div>
  );
};

export default DeleteAccount;
