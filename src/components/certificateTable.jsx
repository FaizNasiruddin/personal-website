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
                        <td>React Basics</td>
                        <td><button>View</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Advanced CSS</td>
                        <td><button>View</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>JavaScript Mastery</td>
                        <td><button>View</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>UI/UX Fundamentals</td>
                        <td><button>View</button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Node.js Essentials</td>
                        <td><button>View</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CertificateTable