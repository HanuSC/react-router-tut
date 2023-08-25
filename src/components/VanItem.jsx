
const VanItem = ({van}) => {
    const {img, price, category, model} = van
    const filters = {
        rugged: 'bg-[#115E59]',
        simple: 'bg-[#E17654]',
        luxury: 'bg-[#161616]',
    }
  return (
    <>
    <div className="max-w-sm rounded shadow-lg bg-white">
        <img className="w-full" src={img} alt={model} />
        <div className="flex flex-col justify-between">
            <p className="m-3 flex justify-between">
                <span className="font-bold">{model}</span> <span>${price}/day</span>
            </p>
            <span className={`inline-block ${filters[category]}  rounded-sm text-center py-1 text-sm font-semibold text-white m-3 w-1/2`}>{category}</span>
        </div>

            
    </div>
</>
  )
}

export default VanItem