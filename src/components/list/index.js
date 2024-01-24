import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {styles} from './styles';

const Data =[
    {
        id: '1',
        title: 'Data Structures',
        imageSource: require('../../assets/img1.jpg'),
    },
    {
        id: '2',
        title: 'Data Structures',
        imageSource: require('../../assets/img2.png'),
    },
    {
        id: '3',
        title: 'Data Structures',
        imageSource: require('../../assets/img1.jpg'),
    },
    {
        id: '4',
        title: 'Data Structures',
        imageSource: require('../../assets/img2.png'),
    },
    {
        id: '5',
        title: 'Data Structures',
        imageSource: require('../../assets/img1.jpg'),
    },
    {
        id: '6',
        title: 'Data Structures',
        imageSource: require('../../assets/img2.png'),
    },
];

const Item = ({title, imageSource}) => {
    return(
        <View style={styles.item}>
            <Image source={imageSource} style={styles.avata}></Image>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const RenderItem = ({item}) => {
  return (<Item imageSource={item.imageSource} title={item.title}></Item>)
};

const ListCourse = () => {
    return(
        <FlatList
            data={Data}
            renderItem={({item}) => <Item imageSource={item.imageSource} title={item.title}></Item>}
            keyExtrator={(item) =>  item.id} />
    );
};

export default ListCourse;