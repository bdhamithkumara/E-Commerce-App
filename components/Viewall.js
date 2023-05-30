import React , {useEffect, useState} from 'react'
import { View, StyleSheet, TextInput , Alert , FlatList , TouchableOpacity ,Text, Button} from 'react-native';
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
                    style={{
                        marginTop: 40,
                        padding: 10,
                        width: 350,
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: 'blue',
                      }}
                    placeholder="Item Name"
                    autoCapitalize="none"
                    value={itemname}
                    onChangeText={(val) => setItemname(val)}
                />
                <TextInput
                    style={{
                        marginTop: 5,
                        padding: 10,
                        width: 350,
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: 'blue',
                      }}
                    placeholder="Available Quantity"
                    autoCapitalize="none"
                    value={qty}
                    onChangeText={(val) => setQty(val)}
                />
                <TextInput
                    style={{
                        marginTop: 5,
                        padding: 10,
                        width: 350,
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: 'blue',
                      }}
                    placeholder="Unit Price"
                    autoCapitalize="none"
                    value={price}
                    onChangeText={(val) => setPrice(val)}
                />



                <View style={{ flexDirection: 'row', marginTop: 15, marginLeft : 'auto', marginRight: 'auto'  }}>
        <TouchableOpacity onClick={handleSubmit}
          style={{
            backgroundColor: 'blue',
            padding: 10,
            width: 150,
            borderRadius: 30,
            marginVertical: 2,
            marginHorizontal:10,
          }} >

            
            <button  style={{ textAlign: 'center', color : 'white', fontSize: 18 , backgroundColor: 'transparent', borderStyle : 'none',
            }}> Insert </button>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            width: 150,
            borderRadius: 30,
            marginVertical: 2,
            marginHorizontal:10,
          }} >
         <button  style={{ textAlign: 'center', color : 'white', fontSize: 18 , backgroundColor: 'transparent', borderStyle : 'none',
            }}> Update </button>
        </TouchableOpacity>


        </View>

        <View style={{ flexDirection: 'row', margin: 5, marginLeft : 'auto', marginRight: 'auto' }}>
          <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            width: 150,
            borderRadius: 30,
            marginVertical: 2,
            marginHorizontal:10,
          }} >
         <button  style={{ textAlign: 'center', color : 'white', fontSize: 18 , backgroundColor: 'transparent', borderStyle : 'none',
            }}> Delete </button>
        </TouchableOpacity>
          </View>
                

    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',

      },
   
})


export default Viewall