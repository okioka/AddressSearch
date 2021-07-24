import React from 'react';
import ResultData from './ResultData';

export default class Result extends React.Component {
  render() {
    let resultNodes = "";
    if(this.props.result === null) {
      alert("検索結果がありません")
    } else {
      resultNodes = this.props.result.map((result, index) => {
        return(
          <ResultData key={index} address1={result.address1} address2={result.address2} address3={result.address3}/>
        )
      })
    }

    return (
      <div>
        {resultNodes}
      </div>
    )
  }
}