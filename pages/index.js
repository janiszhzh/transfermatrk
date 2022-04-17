import {getClubPlayersByClubId} from "../lib/api";
import { useEffect, useState } from "react"


export default function IndexPage() {

    const [players, setPlayers] = useState(null)

    useEffect( () => {
    }, [])
    const load = async () => {
        try {
            const d = await getClubPlayersByClubId(260)
            setPlayers(d)
        } catch (e) {
            if (e.status === 404) router.push("/404")
        }
    }



    return players && (
        <div>
            <h1>
                sdfa
            </h1>
            <p>
                {players}
            </p>
        </div>

)

}
