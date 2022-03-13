// import React from 'react';
// import PropTypes from 'prop-types';
// import {FlatList, SafeAreaView, ScrollView, StyleSheet, TextInput, View} from 'react-native';
// import {Text} from 'react-native-elements';
// const data = [
//   {
//     id: 1,
//     kihoc: 'Spring 2019',
//     ngaynhanthuong: '30/5/2019',
//     noidung: 'Sinh viên giỏi',
//     nguoiky: 'Vũ Chí Thành',
//     soquyetdinh: '737/QĐ-ĐHFPT',
//   },
//   {
//     id: 2,
//     kihoc: 'Summer 2021',
//     ngaynhanthuong: '30/5/2021',
//     noidung: 'Sinh viên giỏi',
//     nguoiky: 'Vũ Chí Thành',
//     soquyetdinh: '737/QĐ-ĐHFPT',
//   },
// ];
// function SmsScreen(props) {
//     const renderItem = ({ item }) => (
//         <Item title={item.title} />
//       );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   scroll: {
//     backgroundColor: '#DDDDDD',
//   },
//   container: {
//     backgroundColor: '#ffffff',
//     margin: 10,
//     paddingTop: 5,
//     paddingLeft: 15,
//     flexDirection: 'row',
//     flex: 1,
//   },
//   textTitle: {
//     fontWeight: 'bold',
//     color: '#000000',

//     paddingBottom: 10,
//     paddingTop: 10,
//   },
// });

// SmsScreen.propTypes = {};

// export default SmsScreen;
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    id: 1,
    kihoc: 'Spring 2019',
    ngaynhanthuong: '30/5/2019',
    noidung: 'Sinh viên giỏi',
    nguoiky: 'Vũ Chí Thành',
    soquyetdinh: '737/QĐ-ĐHFPT',
  },
  {
    id: 2,
    kihoc: 'Summer 2021',
    ngaynhanthuong: '30/5/2021',
    noidung: 'Sinh viên giỏi',
    nguoiky: 'Vũ Chí Thành',
    soquyetdinh: '739/QĐ-ĐHFPT',
  },
];

const SmsScreen = () => {
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity activeOpacity={0.8} style={styles.item}>
        <View>
          <Text style={styles.textItemLeft}>{item.kihoc}</Text>
        </View>
        <View>
          <Text style={styles.textItem}>Ngày tháng: {item.ngaynhanthuong}</Text>
          <Text style={styles.textItem}>Nội dung: {item.noidung}</Text>
          <Text style={styles.textItem}>Người ký: {item.nguoiky}</Text>
          <Text style={styles.textItem}>Số quyết định: {item.soquyetdinh}</Text>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  title: {
    fontSize: 32,
  },
  textItem: {
    marginBottom: 5,
    color: '#000',
    fontWeight: '500',
  },
  textItemLeft: {
    width: 100,
    marginRight: 10,
    color: 'green',
  },
});

export default SmsScreen;
