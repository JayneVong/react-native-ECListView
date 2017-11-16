# react-native-ECListView
=

ECListView.js 刷新加载组件
ECListViewTest.js React Native 可运行测试AppRegistry.registerComponent('APP', () => App);
ECLoadingMore.js 加载更多组件
ECScreenUtil.js 屏幕工具类

 <EListView </br>
 enableRefresh={true} ## 是否启用刷新 </br>
 enableLoadMore={true} ## 是否启用加载更多  </br>
 dataSource={Data.beans} ## 数据源必须是数组形式[] </br>
 renderRow={(rowData) => this._renderRow(rowData)} ## 每一条的布局 需要返回组件 </br>
 onRefresh={() => this._refresh()} ## 刷新监听 可以在此处请求新数据 </br>
 onLoading={() => this._loading()} ## 加载更多监听 可以再次请求更多数据变更数据 </br>
 />

请参考 listview/ECListViewTest.js
[更多使用方法请参考](https://github.com/George-King/react-native-ECListView/listview/ECListViewTest.js)
