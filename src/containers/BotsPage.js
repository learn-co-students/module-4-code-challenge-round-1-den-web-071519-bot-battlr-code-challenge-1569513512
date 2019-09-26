import React from "react";
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: [],
    selectedBot: '',
    search: ''
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

  handleChange = (event) => {
    this.setState({ search: event.target.input })
  }

  filteredBots = () => {
    return this.state.bots.filter(bot => {
        return bot.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} />
            <form>
              <input type='text' name='search' onChange={this.handleChange} value={this.state.search} placeholder='Search for a bot' />
            </form><br/>
        {(this.state.selectedBot === '')
          ? <BotCollection bots={this.state.bots} updateSelected={this.updateSelected} army={this.state.army} filteredBots={this.filteredBots()} /> 
          : <BotSpecs bot={this.state.selectedBot} updateArmy={this.updateArmy} renderCollection={this.renderCollection} /> 
        }
      </div>
    );
  }

}

export default BotsPage;
