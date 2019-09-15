import React from 'react'
import PizzaList from './PizzaList'
import { connect } from 'react-redux'

class PizzaListContainer extends React.Component {
  selectPizza = (id) => {
    console.log('selected pizza:', id)
    this.props.dispatch({
        type: 'SELECT_PIZZA',
        payload: id
    })
  }

  render() {
    return <PizzaList pizzasArray={this.props.pizzasiki} selectPizza={this.selectPizza} />
  }
}

const mapStateToProps = (state) => {
  return {
    pizzasiki: state.pizzas
  }
}

export default connect(mapStateToProps)(PizzaListContainer)