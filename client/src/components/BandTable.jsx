import { useEffect, useState } from "react"

const BandTable = ( { socket }) => {

    const [bands, setBands] = useState([])

    useEffect(() => {
      socket.on('current-bands', (bandsList) => {
        setBands( bandsList )
      } )
    }, [ socket ])
    

    return (
        <table>

            <thead>
                <tr className="table__head">
                    <td className="name__clmn">Band name</td>
                    <td className="vote__clmn">Votes</td>
                    <td className="btn__clmn">&nbsp;</td>
                    <td className="btn__clmn">&nbsp;</td>
                    <td className="btn__clmn">&nbsp;</td>
                </tr>
            </thead>
            <tbody>
                {
                    bands.map( band => (
                        <tr key={band.id}>
                            <td>{band.name}</td>
                            <td>{band.votes}</td>
                            <td>
                                <button className="btn__add">-1</button>
                            </td>
                            <td>
                                <button className="btn__add">-1</button>
                            </td>
                            <td>
                                <button className="btn__delete">Del</button>
                            </td>
                        </tr>
                    ))
                }
                

            </tbody>

        </table>    
    )
}

export default BandTable