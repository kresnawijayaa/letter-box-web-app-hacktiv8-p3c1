import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/actionCreator";
import UserRow from "../components/UserRow";
import { Link } from "react-router-dom";

export default function User() {
  const [loading, setLoading] = useState(true);
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchUsers());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => getData(), 4000);
  }, []);

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between">
            <h1 className="text-4xl font-semibold">Admin</h1>
            <Link
              className="justify-self-end inline-flex items-center gap-2 rounded border border-white px-6 py-2 text-white hover:text-gray-400 hover:border-gray-400"
              to="/admin/add"
            >
              <span className="text-xs font-normal"> Add Admin </span>
            </Link>
          </div>
          <br />
          {loading ? (
            <div className="w-full h-screen flex flex-col justify-center items-center">
              <div id="loader">
                <div id="box"></div>
                <div id="hill"></div>
              </div>
              <h1 id="text-loading" data-text="It's loading…">
                It's loading…
              </h1>
            </div>
          ) : (
            <div className="gap-8">
              <div className="rounded-md border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr>
                      <th className="whitespace-nowrap px-8 py-6 font-medium text-white text-left">
                        Username
                      </th>
                      <th className="whitespace-nowrap px-8 py-6 font-medium text-white text-left">
                        Email
                      </th>
                      <th className="whitespace-nowrap px-8 py-6 font-medium text-white text-left">
                        Phone Number
                      </th>
                      <th className="whitespace-nowrap px-8 py-6 font-medium text-white text-left">
                        Address
                      </th>
                      <th className="whitespace-nowrap px-4 py-6 font-medium text-white text-left">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => {
                      return <UserRow key={user.id} user={user} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
