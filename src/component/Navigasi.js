import React from 'react'
import {Link} from 'react-router-dom'

const Navigasi = () => {
    return(
        <div>
            <ul>
                <li>
                    <Link to={"/"}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to={"/counter"}>
                    Counter
                    </Link>
                </li>
                <li>
                    <Link to={"/listproduct"}>
                    List Product
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigasi;