import { BackButton } from "./BackButton"

export const GlobalHeader = function () {
  return (
    <div className="flex justify-between mb-8 px-4 lg:px-8">
      <h1 className="md:text-lg lg:text-xl">Skyrim Archemy Cheatsheet</h1>
      <BackButton />
    </div>
  )
}
