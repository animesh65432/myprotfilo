import { createContext } from "react"

type contexttypes = {
    color: boolean,
    ontoggole: () => void

}

const context = createContext<contexttypes>({
    color: true,
    ontoggole: () => { }
})

export { context }