import { Component }  from "react";
import Header         from "./components/Header";
import PersonalInfo   from "./components/PersonalInfo";
import Qualifications from "./components/Qualifications";
import Experience     from "./components/Experience";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      qualifications: [
        {
          institution: "",
          certificate: "",
          startDate: "",
          endDate: ""
        }
      ],
      experiences: [
        {
          organization: "",
          position: "",
          startDate: "",
          endDate: ""
        }
      ]
    };

    this.modifyInfoField = this.modifyInfoField.bind(this)
    this.handleChange    = this.handleChange.bind(this)
  }

  modifyInfoField(e) {
   const { name } = e.target

    //decide what field in the state to update based on the name of the button clicked
    const newInfo = (name === 'experience') ? 
    {
      organization: "",
      position: "",
      startDate: "",
      endDate: ""      
    } :
    {
      institution: "",
      certificate: "",
      startDate: "",
      endDate: ""
    }


    this.setState(state => {
      return {
        [name]: [...state[name], newInfo]
      }
    })
  }

  handleChange(e) {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })

  }

  render() {
    const enabledStyling = {
      backgroundColor: 'pink'
    }
  
    const disabledStyling = {
      backgroundColor: '#ccc',
      color: 'white',
    }
  
    const inputsAreFilled = true 
  
    return (
      <div>
        <Header /> 
        <form className="main-form"> 
          <PersonalInfo state={this.state} handleChange={this.handleChange}/>
          <Qualifications state={this.state} modifyInfoField={this.modifyInfoField} handleChange={this.handleChange}/>
          <Experience state={this.state} modifyInfoField={this.modifyInfoField} handleChange={this.handleChange}/>
          <button type="submit" className="main-form__button" style={!inputsAreFilled ? enabledStyling : disabledStyling } disabled={true}>Preview CV</button>
        </form>
      </div>
      
    );
  }
}

export default App;
