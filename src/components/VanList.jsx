import VanItem from "./VanItem"

const VanList = ({vans}) => {
    

    
  return (
    <>
    <main className="grid grid-cols-2 gap-y-5 gap-x-4 py-4 md:grid-cols-3">
        { vans.map(van => (
            <VanItem key={van.id} van={van} />
        ))}
    </main>
    
    </>
  )
}

export default VanList