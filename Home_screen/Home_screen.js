import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import React from "react";

const HomeScreen = () => {
  return (
    <View>
      <View
        style={{
          borderWidth: 0,
          paddingBottom: 10,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          backgroundColor: "#FFF6E5",
          height: 340,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* profile picture */}
          <View style={styles.profilePicture}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
              }}
              style={{ height: 32, width: 32, borderRadius: 50, margin: 2 }}
            ></Image>
          </View>
          {/* October */}
          <View style={styles.October}>
            <Text style={{ marginLeft: 35, marginTop: 8, fontSize: 15 }}>
              October
            </Text>
          </View>
        </View>
        {/* accountbalance */}
        <View style={styles.accountbalance}>
          <Text style={{ color: "#91919F", fontWeight: 400, marginLeft: 30 }}>
            Account Balance
          </Text>
          <Text style={{ fontSize: 44, fontWeight: 700, marginLeft: 21 }}>
            $9400
          </Text>
        </View>

        {/* income/expens */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.incomeEexpens}>
            <View
              style={{
                height: 50,
                width: 50,
                marginTop: 18,
                marginLeft: 16,
                borderRadius: 15,
                backgroundColor: "white",
              }}
            ></View>
            <View>
              <Text
                style={{
                  marginTop: 16,
                  marginLeft: 10,
                  fontSize: 16,
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Income
              </Text>
              <Text
                style={{
                  marginTop: 1,
                  marginLeft: 10,
                  fontSize: 22,
                  color: "white",
                  fontWeight: 600,
                }}
              >
                $5000
              </Text>
            </View>
          </View>
          <View style={styles.expens}>
            <View
              style={{
                height: 50,
                width: 50,
                marginTop: 18,
                marginLeft: 16,
                borderRadius: 15,
                backgroundColor: "white",
              }}
            ></View>
            <View>
              <Text
                style={{
                  marginTop: 16,
                  marginLeft: 10,
                  fontSize: 16,
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Expenses
              </Text>
              <Text
                style={{
                  marginTop: 1,
                  marginLeft: 10,
                  fontSize: 22,
                  color: "white",
                  fontWeight: 600,
                }}
              >
                $1200
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* chartpattern */}
      <View style={{ borderWidth: 1, height: 230, marginTop: 5 }}>
        <Text style={{margin:8, fontSize:20, fontWeight:500}}>Spend Frequency</Text>
      </View>

      {/* timeBar */}
                <View style={{ flex: 1, flexDirection: "row" ,marginLeft:6 }}>
                    <View style={styles.timeBar_box}>
                        <Text style={[styles.Textbar,styles.timeBar_box_focus]}>Today</Text>
                    </View>
                    <View style={styles.timeBar_box}>
                        <Text style={styles.Textbar}>Week</Text>
                    </View>
                    <View style={styles.timeBar_box}>
                        <Text style={styles.Textbar}>Month</Text>
                    </View>
                    <View style={styles.timeBar_box}>
                        <Text style={styles.Textbar}>Year</Text>
                    </View>
                    
                </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    timeBar_box:{
        height:35
        ,width:95, borderRadius:50, marginTop:10
    },
    Textbar:{
        marginTop:5, marginLeft:25
    },
    timeBar_box_focus:{
        borderWidth:1,color:'#FCAC12', fontWeight:700,fontSize:16
    },
  profilePicture: {
    borderWidth: 2,
    height: 40,
    width: 40,
    borderRadius: 50,
    marginTop: 50,
    marginLeft: 14,
    borderColor: "#7F3DFF",
  },
  October: {
    borderWidth: 1,
    height: 40,
    width: 100,
    marginTop: 50,
    marginLeft: 100,
    borderRadius: 50,
    borderColor: "#91919F",
  },
  accountbalance: {
    borderWidth: 0,
    height: 80,
    width: 170,
    marginLeft: 115,
  },

  incomeEexpens: {
    borderWidth: 0,
    height: 85,
    width: 170,
    marginTop: 20,
    marginLeft: 16,
    borderRadius: 30,
    backgroundColor: "#00A86B",
    flex: 1,
    flexDirection: "row",
  },

  expens: {
    borderWidth: 0,
    height: 85,
    width: 170,
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 30,
    backgroundColor: "#FD3C4A",
    flex: 1,
    flexDirection: "row",
  },
});
