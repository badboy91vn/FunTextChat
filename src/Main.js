import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    ListView,
    ScrollView,
    Dimensions,
    Platform,
    StatusBar,
    TouchableOpacity,
    Clipboard,
    SafeAreaView
} from "react-native";
import {
    Container,
    Content,
    Header,
    Body,
    Left,
    Right,
    Icon,
    Button,
    List,
    ListItem
} from "native-base";
// import { Grid, Col, Row } from "react-native-easy-grid";
// import Toast from 'react-native-simple-toast';
// import Toast, { DURATION } from "react-native-easy-toast";

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    },
    scrollContainer: {
        backgroundColor: "#00cc99"
    },
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    itemDivider: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#00cc99"
    },
    box: {
        backgroundColor: "#cdf5eb",
        width: Dimensions.get("window").width / 2 - 20,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 6,
        borderRadius: 5
    }
});

import dataObjects from "../src/assets/content.json";

class Main extends Component {
    content = () => {
        var data = [];
        var count = 0;
        for (const obj of Object.keys(dataObjects)) {
            data.push(
                <ListItem key={obj} style={styles.itemDivider}>
                    <Text style={{ fontSize: 20, color: "#595959" }}>
                        {obj}
                    </Text>
                </ListItem>
            );
            for (const v of dataObjects[obj]) {
                // console.log(v);
                data.push(
                    <TouchableOpacity
                        key={count}
                        style={styles.box}
                        onPress={() => {
                            Clipboard.setString(v.art);

                            // Toast.show(v.art);
                            // this.refs.toast.show(v.art, DURATION.LENGTH_SHORT);
                        }}
                    >
                        <Text style={{ color: "#595959" }}>{v.name}</Text>
                        <Text style={{ color: "#595959" }}>{v.art}</Text>
                    </TouchableOpacity>
                );
                count++;
            }
        }

        return data;
    };

    render() {
        return (
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={[styles.scrollContainer, styles.androidHeader]}>
                    <View style={styles.container}>{this.content()}</View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Main;
