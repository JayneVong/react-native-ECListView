/**
 * @author George King
 * @version [React Native  V1.0]
 * @date 17/11/15
 * @description ECListView
 */

import React, {Component} from 'react'
import {
    ListView,
    RefreshControl
} from 'react-native'
import ECLoadingMore from './ECLoadingMore'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class ECListView extends Component {

    /**
     * 初始化数据
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            enableRefresh: props.enableRefresh,
            enableLoadMore: props.enableLoadMore,
            isRefreshing: false,
            loadMore: false,
            dataSource: props.dataSource && ds.cloneWithRows(props.dataSource)
        }
    }

    componentWillReceiveProps(nextProps) {
        let newData = nextProps.dataSource && ds.cloneWithRows(nextProps.dataSource);
        console.log("componentWillReceiveProps ");
        this.setState({
            loadMore: false,
            dataSource: newData,
        });
    }


    /**
     *  绘制每一行的布局
     * @param rowData
     * @returns {XML}
     * @private
     */
    _renderRow(rowData) {
        return this.props.renderRow(rowData);
    }

    /**
     * 绘制底部加载更多布局
     * @returns {XML}
     * @private
     */
    _renderFooter() {
        if (this.state.dataSource === null || this.state.enableLoadMore !== true) {
            return;
        }
        return (
            <ECLoadingMore
                isLoading={this.state.loadMore}
                onLoading={() => this._onLoadMore()}
            />
        )
    }

    /**
     * scrollview滑动的时候
     * @private
     */
    _onScroll(event) {
        if (this.state.loadMore) {
            return;
        }
        let y = event.nativeEvent.contentOffset.y;
        let height = event.nativeEvent.layoutMeasurement.height;
        let contentHeight = event.nativeEvent.contentSize.height;
        console.log('offsetY-->' + y);
        console.log('height-->' + height);
        console.log('contentHeight-->' + contentHeight);
        if (y + height >= contentHeight - 20) {
            this._onLoadMore();
        }
    }

    _onRefresh() {
        this.props.onRefresh();
    }

    _onLoadMore() {
        this.setState({
            loadMore: true,
        });
        this.props.onLoading();
    }

    render() {
        if (this.state.dataSource) {
            return (
                <ListView
                    refreshControl={this.state.enableRefresh === true ?
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#ff0000"
                            title="加载中..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffffff"
                        />
                        : null}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this._renderRow(rowData)}
                    renderFooter={() => this._renderFooter()}
                    onScroll={this._onScroll.bind(this)}
                    scrollEventThrottle={50}
                />

            )
        }
    }

}


export default ECListView