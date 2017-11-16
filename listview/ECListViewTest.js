/**
 * @author George King
 * @version [React Native  V1.0]
 * @date 17/11/15
 * @description ECListViewTest
 *
 * 可运行看实际效果UI
 */


import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import ECListView from './ECListView'


class ECListViewTest extends Component {

    constructor(props) {
        super(props);
        const array = [];
        for (let i = 0; i < 20; i++) {
            let item = {'name': '默认数据:' + (i + 1)}
            array.push(item);
        }
        this.state = {
            data: array
        }
    }

    _renderRow(rowData) {
        return (
            <Text style={{margin: 30}}>{rowData.name}</Text>
        )
    }

    _refresh() {
        const array = [];
        for (let i = 0; i < 20; i++) {
            let item = {'name': '刷新后默认数据:' + (i + 1)}
            array.push(item);
        }
        this.setState({
            data: array
        });
    }

    _loading() {
        // 模拟网络请求3m请求完毕
        setTimeout(() => {
            let newData = this.state.data;
            let limit = newData.length + 20;
            for (let i = newData.length; i < limit; i++) {
                let newObj = {'name': '新数据' + (i + 1)};
                newData.push(newObj);
            }

            this.setState({
                data: newData
            })
        }, 3000);
    }

    render() {
        if (this.state.data) {
            return <ECListView enableRefresh={true}
                               enableLoadMore={true}
                               dataSource={this.state.data}
                               renderRow={(rowData) => this._renderRow(rowData)}
                               onRefresh={() => this._refresh()}
                               onLoading={() => this._loading()}
            />
        } else {
            return (<View/>)
        }

    }
}

export default ECListViewTest