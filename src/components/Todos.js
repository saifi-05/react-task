
const Todos = (props) => {
    console.log(props);
    return <div >
        <ul>
            {
            props.Tasks.map((task,index) => 
            <li key={index}>
                <div class="card">
                    <h4><b>{task.title}</b></h4>

                    <div class="container">
                        <p>{task.desc}</p>
                    </div>
                </div>
            </li>
            )
            }
        </ul>
    </div>
}

export default Todos