export default function SelectGenre({ genre }) {
  return (
    <>
      <option className="text-gray-800" value={genre.id}>
        {genre.name}
      </option>
    </>
  );
}
