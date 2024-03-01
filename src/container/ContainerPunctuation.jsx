export const ContainerPunctuation = ({children}) => {
  return (
    <div className="w-[200px] h-full bg-black rounded-lg p-4 flex flex-col gap-2">
        <h2 className="text-2xl text-center text-white">Participantes</h2>
        <hr />
        {children}
    </div>
  )
}
