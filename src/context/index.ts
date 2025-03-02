import { createContext } from "react"

type contexttypes = {
    color: boolean,
    ontoggole: () => void,
    navbar: "home" | "project",
    onsetnavbar: (selectnavbar: "home" | "project") => void

}

const context = createContext<contexttypes>({
    color: true,
    ontoggole: () => { },
    navbar: "home",
    onsetnavbar: () => { }
})

export { context }