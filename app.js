function Field({ name, value, onChange, children }) {
    return <div className="mt-2">
        <label htmlFor={name} >{children}</label>
        <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control mt-2" />
    </div>
}

function Checkbox ({ name, value, onChange, children }) {
    return <div className="mt-2 d-flex align-items-center">
        <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input mt-2" />
        <label htmlFor={name} className="form-check-label ms-2" >{children}</label>
    </div>
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // nom: ["demo 1", "demo 2"]
            // checked: true
            nom: "",
            prenom: "",
            newsletter: false

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const type = e.target.type

        const value = type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            // nom: Array.from(e.target.selectedOptions).map(o => o.value)
            // checked: e.target.checked

            [name]: value
        })
    }

    handleSubmit (e){
        e.preventDefault();
        const data = JSON.stringify(this.state);
        console.log(data)

        this.setStatetate =({
            nom: "",
            prenom: "",
            newsletter: false
        })
    }

    render() {
        return <form className="container mt-5" onSubmit={this.handleSubmit}>
            {/* ===================================*/}
            {/* gestion des champs select et input */}
            {/* ===================================*/}

            {/* {JSON.stringify(this.state.nom)}
            <label htmlFor="nom">Mon nom</label>

            {/* La balise Select 
            {/* <select value={this.state.nom} onChange={this.handleChange} multiple>
                <option value="demo 1 ">Demo 1</option>
                <option value="demo 2 ">Demo 2</option>
                <option value="demo 3 ">Demo 3</option>
            </select> 

            {/* La balise checkbox 
            <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
            {this.state.checked ? <div>Un message affiché si on coche la checkbox</div> : null} */}

            {/* ================================= */}
            {/* Gestion des plusiers champq */}
            {/* ================================= */}

            {/* <div>
                <label htmlFor="no;">Nom</label>
                <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom" />
            </div>
            <div>
                <label htmlFor="prenom">Prenom</label>
                <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom" />
            </div>
            <div>
                <label htmlFor="newsletter">S'a bonne à la newsletter ?</label>
                <input type="checkbox" checked={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter" />
            </div> */}

            <Field name="nom" value={this.state.nom} onChange={this.handleChange} >Nom</Field>
            <Field name="prenom" value={this.state.prenom} onChange={this.handleChange} >Prénom</Field>
            <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange} >S'abonner à la newsletter</Checkbox>
            <button className="btn btn-primary d-block my-3" >Envoyer</button>
            {JSON.stringify(this.state)}
        </form>
    }
}

ReactDOM.render(<Home />, document.querySelector('#app'))