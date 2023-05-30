import React from 'react'
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';

const Products = ({navigation}) => {

    const handleViewAll = () => {navigation.navigate('Viewall');};

    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    {
                        key: '1', name: 'Frash Fruits & Vegetable', image: 'https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        color: 'rgba(83, 177, 117, 0.3)'
                    },
                    {
                        key: '2', name: 'Cooking Oil & Ghee', image: 'https://images.pexels.com/photos/8469439/pexels-photo-8469439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        color: '    rgba(248, 164, 76, 0.3)'
                    },
                    {
                        key: '3', name: 'Meat & Fish', image: 'https://images.pexels.com/photos/7451973/pexels-photo-7451973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        color: '   rgba(211, 176, 224, 0.3)'
                    },
                    {
                        key: '4', name: 'Bakery & Snacks', image: 'https://images.pexels.com/photos/6550776/pexels-photo-6550776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        color: '   rgba(253, 229, 152, 0.3)'
                    },
                    {
                        key: '5', name: 'Dairy & Eggs', image: 'https://images.pexels.com/photos/2959317/pexels-photo-2959317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        color: '   rgba(247, 165, 147, 0.3)'
                    },
                    {
                        key: '6', name: 'Beverages', image: 'https://images.pexels.com/photos/2531184/pexels-photo-2531184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        color: '   rgba(183, 223, 245, 0.3)'
                    },
                ]}

                renderItem={({ item }) =>
                    <TouchableOpacity key={item.key} onPress={handleViewAll} >
                        <Card containerStyle={{
                            borderColor : `${item.color} 5 solid` ,
                            borderRadius: 20,
                        }}>

                            <Card.Title>{item.name}</Card.Title>
                            <Card.Divider />
                            <Card.Image style={{ borderRadius: 20, }}
                                source={{ uri: item.image }} />

                        </Card>

                    </TouchableOpacity>
                }
            />

        </View>
    )
}



const styles = StyleSheet.create({
   
})

export default Products