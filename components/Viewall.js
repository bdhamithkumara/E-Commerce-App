import React , {useEffect, useState} from 'react'
import { View, StyleSheet, TextInput , Alert , FlatList} from 'react-native';
import { Card } from '@rneui/themed';
import { collection, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from '../database/firebase'; 
import {ref,onValue} from 'firebase/database'
import firebasefunction from '../functions/firebasefunction';

const Viewall = () => {

    const [itemname , setItemname] = useState('');
    const [qty , setQty ] = useState('');
    const [price,setPrice] = useState([]);
    const [flag, setFlag] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (itemname === "" || qty === "" || price == "" ) {
          Alert.alert("All fields are mandatory!")
          return;
        }
        const newdataset = {
            itemname,
            qty,
            price,
        };
        console.log(newdataset);
    
        try {
          if (id !== undefined && id !== "") {
            await DetailDataService.updateDetails(id, newdataset);
            setBookId("");
            Alert.alert("Updated successfully!")
          } else {
            await DetailDataService.addDetails(newdataset);
            Alert.alert("New Book added successfully!")
          }
        } catch (err) {
            Alert.alert(err)
        }
    
        setItemname("");
        setQty("");
        setPrice("");
      };

  return (
    <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Item Name"
                    autoCapitalize="none"
                    value={itemname}
                    onChangeText={(val) => setItemname(val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Available Quantity"
                    autoCapitalize="none"
                    value={qty}
                    onChangeText={(val) => setQty(val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Unit Price"
                    autoCapitalize="none"
                    value={price}
                    onChangeText={(val) => setPrice(val)}
                />

                <button onClick={create}>insert</button>
                <button onClick={update}>update</button>
                
                {/* {
                    dataall.map((item,index) => {
                        return (
                            <View key={index}>
                                <Text>{item.email}</Text>
                                <Text>{item.username}</Text>
                            </View>
                        )
                    })
                } */}
            
    </View>
  )
}

const styles = StyleSheet.create({
   
})


export default Viewall