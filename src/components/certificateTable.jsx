function CertificateTable(){
    return(
        <div className="certificatelist">
            <table>
                <tbody>
                    <tr>
                        <th style={{width:'10%'}}>No</th>
                        <th style={{width:'80%'}}>Certificate</th>
                        <th style={{width:'10%'}}></th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Degree Dean List Certificate 1</td>
                        <td>
                            <a href="/documents/dean.pdf" target="_blank" rel="noopener noreferrer">
                                <button>View</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Degree Dean List Certificate 2</td>
                        <td>
                            <a href="/documents/dean list 1.pdf" target="_blank" rel="noopener noreferrer">
                                <button>View</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Diploma Certificate</td>
                        <td>
                            <a href="/documents/certificate.pdf" target="_blank" rel="noopener noreferrer">
                                <button>View</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Diploma Transript</td>
                        <td>
                            <a href="/documents/transcript.pdf" target="_blank" rel="noopener noreferrer">
                                <button>View</button>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CertificateTable