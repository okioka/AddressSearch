import React from 'react';
import axios from 'axios';
import axiosJsonp from 'axios-jsonp';
import Header from './components/Header';
import From from './components/From';
import Result from './components/Result';
import './App.css';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
    this.addressSearch = this.addressSearch.bind(this);
  }
  // 住所検索
  addressSearch(zipcode) {
    const url = "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zipcode;
    axios.get(url, {adapter: axiosJsonp}).then(res => {
      this.setState({results: res.data.results});
    }).catch(error => {
      alert("データの表示ができません");
      console.log("データ表示NG");
      console.log(error);
    })
  }
  render() {
    return (
      <div>
        <div>
        　<Header />
        </div>
        <div>
          <From search={this.addressSearch} />
        </div>
        <Result result={this.state.results} />
      </div>
    );
  }
}

