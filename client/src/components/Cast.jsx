export default function Cast({ cast }) {
  return (
    <>
      <div className="flex items-center gap-4 pt-4">
        <img
          alt="Man"
          src={cast.profilePict}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <p className="mt-0.5 text-lg font-normal text-gray-100">
            {cast.name}
          </p>
        </div>
      </div>
    </>
  );
}
