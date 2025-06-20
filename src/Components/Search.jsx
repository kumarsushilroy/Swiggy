


const Search = ({placeholder='search....', value, onChange}) => {
  return (
    <div>
      <input
       onChange={onChange}
       value={value}
       className=" border-b-2 text-gray-500 p-2"
        placeholder={placeholder} type="text"
       />
    </div>
  )
}

export default Search