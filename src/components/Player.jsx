
export const Player = ({name = "", points = 0}) => {
  return (
    <div className="rounded-md p-2 flex flex-col gap-2">
        <p className="text-white text-lg text-center">{name}</p>
        <p className="text-white text-2xl text-center">{points}</p>
    </div>
  )
}
