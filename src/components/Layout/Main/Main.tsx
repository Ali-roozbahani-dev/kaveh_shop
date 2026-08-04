import { ReactNode } from "react";


export default function Main({children}: {children: ReactNode}){

    return (
        <main className="container-0 px-3">
            {children}
        </main>
    )
}