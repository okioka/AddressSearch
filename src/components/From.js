import React from 'react';

// 検索フォーム
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="form">
        <input type="text" className="txt" name="zipcode" value={this.state.zipcode} placeholder="郵便番号(ハイフン除く)" onChange={this.handleChange} />
        <button className="btn" onClick={() => this.props.search(this.state.zipcode)}>検索</button>
      </div>
    )
  }
}