import { useContext } from "react"
import { SocketContext } from "../context/socketContext"
import { TableAddVotes, TableDelete, TableHead, TableInput, TableRmVotes } from "./tableComponents/index"

export const BandTable = () => {

    const { bands } = useContext( SocketContext )

    return (
        <table>
            <TableHead/>

            <tbody>

                {
                    bands.map( band => (
                        <tr key={band.id}>
                            <TableInput band={ band }/>
                            <td className="table__votes">{band.votes}</td>
                            <TableRmVotes band={ band }/>
                            <TableAddVotes band={ band }/>
                            <TableDelete band={ band }/>
                        </tr>
                        ))
                }
                
            </tbody>

        </table>    
    )
}

export default BandTable