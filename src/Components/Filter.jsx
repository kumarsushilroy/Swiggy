

 const Filter = ({filterRestaurant, btnText}) => {
  return (
    <div>
        <button onClick={filterRestaurant} className='bg-orange-500 font-bold text-white rounded-lg p-2'>
            {btnText}
        </button>
    </div>
  )
}

export default Filter;