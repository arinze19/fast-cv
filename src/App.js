import { Component }  from "react";
import update         from "immutability-helper";
import Header         from "./components/Header";
import PersonalInfo   from "./components/PersonalInfo";
import Qualifications from "./components/Qualifications";
import Experiences    from "./components/Experience";


class App extends Component {
  constructor() {
    super() 
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      qualifications: [
        {
          institution: "",
          certification: "",
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
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.modifyInfoField   = this.modifyInfoField.bind(this)
  }

  modifyInfoField(e) {
    const { name, className, id } = e.target;

    if (className.includes("delete")) {
      this.setState( state => {
        const newStateArr = [...state[name]]
        newStateArr.splice(id, 1)

        return {
          [name]: newStateArr,
        }
      });
    } 
    
    else  {
      //decide what field in the state to update based on the name of the button clicked
      const newInfo =
        name === "experience"
          ? {
              organization: "",
              position: "",
              startDate: "",
              endDate: "",
            }
          : {
              institution: "",
              certificate: "",
              startDate: "",
              endDate: "",
            };

      this.setState((state) => {
        return {
          [name]: [...state[name], newInfo],
        };
      });
    }
  }

  handleInputChange(e) {
    const { name, value, className, id } = e.target;
    const state                          = this.state

    if(className) {
      const collection = state[className]
      const newState   = update(collection, {[id]: {[name]: { $set: value}}})

      console.log(newState)

      // simplify this?
      this.setState(state =>{
        return {
          collection: [
            {
              [name]: value
            }
          ]
        }
      })
    }

    this.setState({
      [name]: value,
    });
  }

  render() {
    const enabledStyling = {
      backgroundColor: "pink",
    };

    const disabledStyling = {
      backgroundColor: "#ccc",
      color: "white",
    };

    const inputsAreFilled = true;

    return (
      <div>
        <Header />
        <form className="main-form">
          <PersonalInfo />
          <Qualifications
            state={this.state}
            modifyInfoField={this.modifyInfoField}
            handleInputChange={this.handleInputChange}
          />
          <Experiences
            state={this.state}
            modifyInfoField={this.modifyInfoField}
            handleInputChange={this.handleInputChange}
          />
          <button
            type="submit"
            className="main-form__button"
            style={!inputsAreFilled ? enabledStyling : disabledStyling}
            disabled={true}
          >
            Preview CV
          </button>
        </form>
      </div>
    );
  }
}

export default App;
