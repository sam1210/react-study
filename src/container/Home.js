import React from 'react'
import RenderingTag from './Login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from './../actions/AppActions'
class Home extends React.Component {
  render () {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.actions.renderName(document.getElementById('test').value)
        }}>
          <input id='test' placeholder={this.props.name} type='text' />
          <button type='submit'>送信</button>
        </form>
        <p id="post"></p>
        {name}
      </div>
    ) 
  }

}
// const mapDispatchToProps = (dispatch) => ({
//   renderName
// },{dispatch})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign(
      {},
      AppActions
    ), dispatch
  )
})

const mapStateToProps = (state) => ({name: state.name});

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home




