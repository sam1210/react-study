import React from 'react'
import RenderingTag from './Login'
import { connect } from 'react-redux'
import { renderChk, renderName } from './../actions/AppActions'


class Home extends React.Component {
  // handleClick(e) {
  //   this.setState({chk:(!this.state.chk)});
  // }
  render () {
    console.log('this.props.name is', this.props.name)
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(
            renderName(document.getElementById('test').value)
          )
        }}>
          <input id='test' value={this.props.name} type='text' />
          <button type='submit'>送信</button>
        </form>
        {this.props.name}
      </div>
    ) 
  }
  /*
  render() {
    return (
      <div>
      <form onSubmit="{()=>{dispatch(renderName(value))}}">
        <input type="text" onChange={(e) => {this.handleChange(e)}}/>
        <a href="#" onClick={(e) => {this.renderChk(e)}}>rendering</a>
        <p className="rendertxt">ずっとレンダリングああああ：{this.state.name}</p>

        <RenderingTag renderName={this.state.name} renderChk={this.state.chk} />
        <button type="submit"></button>
        </form>
      </div>

    );
  }
  */

  /* this is for rendering check
  render () {
    return (
      <div>
        ほんまにレンダリングされるか？
      </div>
    )
  }
  */
}
const mapStateToProps = store => ({name: store.reducer.name});
const mapDispatchToProps = (dispatch) => ({
  renderName
},dispatch)

export default connect()(Home)
// export default Home




