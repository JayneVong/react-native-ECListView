# ECListView 

### ECListView 是基于 React Native ListView 组件简单封装下拉刷新、上拉加载更多的组件

## 使用步骤
### 1. 先把 listview 文件夹及文件夹里面文件拷贝到工程中
	注意:可以不拷贝ECListViewTest.js 因为这是可运行测试页面
### 2. 导入ECListView组件

	import React, {Component} from 'react';
	import {
	    Text,
	    View
	} from 'react-native';
	import ECListView from './ECListView'
	
### 3. 开始使用
	render() {
        if (this.state.data) {
            return <ECListView enableRefresh={true} // 是否使用刷新
                               enableLoadMore={true} // 是否使用加载更多
                               dataSource={this.state.data} // 数据源 数组形式[]
                               renderRow={(rowData) => this._renderRow(rowData)} // 每一行的布局
                               onRefresh={() => this._refresh()} // 刷新监听
                               onLoading={() => this._loading()} // 加载更多监听
            />
        } else {
            return (<View/>)
        }

    }
    
[更多使用方法请参考](https://github.com/George-King/react-native-ECListView/blob/master/listview/ECListViewTest.js)

### 4. ECListView属性
name  | value | desc
------------- | ------------- | -------------
enableRefresh  | true / false | 是否使用刷新
enableLoadMore  | true / false | 是否使用加载更多
dataSource | [] | 数据源 数组形式[]
renderRow | View | 每一行的布局需要返回View
onRefresh | () |刷新监听
onLoading | () |加载更多监听

</br>

**欢迎大家使用ECListView 如有问题请到 [issues](https://github.com/George-King/react-native-ECListView/issues) 提交**
