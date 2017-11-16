/**
 * @author George King
 * @version [React Native  V1.0]
 * @date 17/11/15
 * @description ECLoadingMore
 */

import React, {Component} from 'react';
import {
    View,
    ActivityIndicator,
    Text,
    TouchableOpacity
} from 'react-native';
import * as ECScreenUtils from './ECScreenUtil';

export default class LoadingMore extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoading: props.isLoading
        };
    }

    render() {
        if (this.state.isLoading === true) {
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                        padding: ECScreenUtils.scaleSize(10)
                    }}>
                    <ActivityIndicator
                        size={'small'}
                        color={'#ff0000'}
                        animating={true}
                        style={{width: ECScreenUtils.scaleSize(15), height: ECScreenUtils.scaleSize(15)}}
                    />
                    <Text style={{
                        color: '#ff0000',
                        fontSize: 10,
                        marginLeft: ECScreenUtils.scaleSize(30)
                    }}>
                        正在加载...
                    </Text>
                </View>
            );
        } else if (this.props.onLoading) {
            return (
                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            isLoading: true
                        });
                        this.props.onLoading && this.props.onLoading()
                    }}
                >
                    <Text style={{
                        color: '#ff0000',
                        fontSize: 10,
                        alignSelf: 'center',
                        padding: ECScreenUtils.scaleSize(10)
                    }}>
                        点击加载更多...
                    </Text>
                </TouchableOpacity>
            );
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: nextProps.isLoading
        });
    }
}