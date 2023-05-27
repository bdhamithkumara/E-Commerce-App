import React from 'react'
import { View, StyleSheet , FlatList , Image} from 'react-native';
import { Card } from '@rneui/themed';

const Products = () => {

    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: '1' , name : 'Frash Fruits & Vegetable', image : 'https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
                    { key: '2' , name : 'Cooking Oil & Ghee', image : 'https://images.pexels.com/photos/8469439/pexels-photo-8469439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
                    { key: '3' , name : 'Meat & Fish', image : 'https://images.pexels.com/photos/7451973/pexels-photo-7451973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
                    { key: '4' , name : 'Bakery & Snacks', image :'https://images.pexels.com/photos/6550776/pexels-photo-6550776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
                    { key: '5' , name : 'Dairy & Eggs', image : 'https://images.pexels.com/photos/2959317/pexels-photo-2959317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}, 
                    { key: '6' ,name : 'Beverages', image : 'https://images.pexels.com/photos/2531184/pexels-photo-2531184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
                ]}
                renderItem={({item}) =>  
                    <Card key={item.key}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Image  
                source={{ uri: item.image }} />
                    </Card> }
                />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Products