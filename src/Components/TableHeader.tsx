import React from 'react';

const TableHeader:React.FC = () => {
    return(
        <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Trabajo</th>
                    <th>Greeting</th>
                    <th>Acción</th>
                </tr>
            </thead>
    )
}

export default TableHeader;