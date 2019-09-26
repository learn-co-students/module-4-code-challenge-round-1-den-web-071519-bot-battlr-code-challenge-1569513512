import React from "react";
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: [],
    selectedBot: ''
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(result => this.setState({ bots: result }))
  }

  updateSelected = (bot) => {
    this.setState({ selectedBot: bot })
  }

  updateArmy = (bot) => {
    this.setState({
      army: [...this.state.army, bot]
    }), this.renderCollection()
  }

  renderCollection = () => {
    this.setState({ selectedBot: '' })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} />
        {(this.state.selectedBot === '')
          ? <BotCollection bots={this.state.bots} updateSelected={this.updateSelected} army={this.state.army} /> 
          : <BotSpecs bot={this.state.selectedBot} updateArmy={this.updateArmy} renderCollection={this.renderCollection} /> 
        }
      </div>
    );
  }

}

export default BotsPage;
