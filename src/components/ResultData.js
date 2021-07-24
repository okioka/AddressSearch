import React from 'react';

export default class ResultData extends React.Component {
  render() {
    return (
      <div className="result">
        検索結果　{this.props.address1}{this.props.address2}{this.props.address3}
      </div>
    )
  }
}