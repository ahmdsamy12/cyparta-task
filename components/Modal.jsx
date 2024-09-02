import { useState } from "react";

const Modal = ({ setShowModal }) => {
  const [state, setState] = useState({
    name: "",
    last: "",
    email: "",
    phone: null,
    bio: null,
  });

  return (
    <div className="fixed inset-0 bg-black opacity-[0.9] backdrop-blur-3xl flex flex-col items-center justify-center">
      <form className="bg-white p-4 rounded-lg">
        <span
          className=" cursor-pointer w-full text-end block"
          onClick={() => setShowModal(false)}
        >
          X
        </span>
        <h3 className="text-black text-center my-5 font-semibold text-[25px]">
          Edit Profile
        </h3>

        <div className="flex flex-col gap-2">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="px-4 py-2 rounded-md bg-transparent border border-[#9d9d9d33] focus:outline-none focus:border-[#9d9d9d]"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            id="last"
            name="last"
            className="px-4 py-2 rounded-md bg-transparent border border-[#9d9d9d33] focus:outline-none focus:border-[#9d9d9d]"
            value={state.last}
            onChange={(e) => setState({ ...state, last: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="px-4 py-2 rounded-md bg-transparent border border-[#9d9d9d33] focus:outline-none focus:border-[#9d9d9d]"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="px-4 py-2 rounded-md bg-transparent border border-[#9d9d9d33] focus:outline-none focus:border-[#9d9d9d]"
            defaultValue={state.phone}
            value={state.phone}
            onChange={(e) => setState({ ...state, phone: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            cols="50"
            className="px-4 py-2 rounded-md bg-transparent border border-[#9d9d9d33] focus:outline-none focus:border-[#9d9d9d]"
            value={state.bio}
            onChange={(e) => setState({ ...state, bio: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default Modal;
