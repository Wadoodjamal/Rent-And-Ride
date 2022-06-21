/*eslint-disable */

import firestore from '@react-native-firebase/firestore';
import * as ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth';

const addCar = async (name,company,model,carType,rate,url,selectedDate) => {
    const car = {
        ownerName:name,
        company:company,
        model:model,
        category:carType,
        year:selectedDate,
        ratePerHour:rate,
        imageURL:url,
        rating:0,
        isAvailable:true,
        timeStamp:firestore.FieldValue.serverTimestamp(),
    }
    const carRef = await firestore().collection('cars').add(car);
    return true;
}

const fetchCarsData = async () => {
    const cars = [];
    await firestore()
          .collection('cars')
          .orderBy('timeStamp', 'desc')
          .get()
          .then(async (querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
                car = {
                    id:doc.id,
                    company:doc.data().company,
                    model:doc.data().model,
                    rating:doc.data().rating,
                    rate:doc.data().ratePerHour,
                    imageURL:doc.data().imageURL,
                    year:doc.data().year,
                    category:doc.data().category,
                    isAvailable:doc.data().isAvailable,
                    ownerName:doc.data().ownerName,
                    timeStamp:doc.data().timeStamp,
                }
                cars.push(car);
                });
            });
            return cars;
}

const updateCar = async (id,name,company,model,carType,rate,url,selectedDate) => {
    const car = {
        ownerName:name,
        company:company,
        model:model,
        category:carType,
        year:selectedDate,
        ratePerHour:rate,
        imageURL:url,
        timeStamp:firestore.FieldValue.serverTimestamp(),
    }
    await firestore().collection('cars').doc(id).update(car);
    return true;
}

const deleteCar = async (id) => {
    await firestore().collection('cars').doc(id).delete();
    return true;
}

const fetchUsersData = async () => {
    const users = [];
    await firestore()
          .collection('users')
          .get()
          .then(async (querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
                user = {
                    id:doc.id,
                    name:doc.data().name,
                    email:doc.data().email,  
                    isBlocked:doc.data().isBlocked,                  
                }
                users.push(user);
                });
            });
    return users;
}

const blockUnblockUser = async (id,status) => {
    await firestore().collection('users').doc(id).update({isBlocked:status});
    return true;
}

const deleteUser = async (id) => {
    await firestore().collection('users').doc(id).delete();
    return true;
}

const getCarByID = async (id) => {
    let car = {};
    await firestore().collection('cars').doc(id).get().then(async (doc) => {
        car = {
            id:doc.id,
            company:doc.data().company,
            model:doc.data().model,
            rating:doc.data().rating,
            ratePerHour:doc.data().ratePerHour,
            imageURL:doc.data().imageURL,
            year:doc.data().year,
            carType:doc.data().carType,
            isAvailable:doc.data().isAvailable,
            ownerName:doc.data().ownerName,
        }
    })
    console.log(car);
    return car;
}

const getUserByID = async (id) => {
    let user = {};
    await firestore().collection('users').doc(id).get().then(async (doc) => {
        user = doc.data();
    })
    console.log(user);
    return user;
}

const fetchRequestData = async () =>{
    const requests = []; 
    await firestore()
    .collection('rents')
    // .orderBy('timeStamp', 'desc')
    .where('isApproved','==',false)
    .get()
    .then(async (querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
            
            request = {
                id:doc.id,
                carId:doc.data().carID,
                userId:doc.data().userID,
                requestedBy:doc.data().requestedBy,
                requestedFor:doc.data().requestedFor,
            }
            requests.push(request);
        })
    });
    return requests;
}

const requestCollectionLength = async () => {
    const requests = await fetchRequestData();
    return requests.length;
}

const fetchApprovedRequestsData = async () => {
    const requests = []; 
    await firestore()
    .collection('rents')
    // .orderBy('timeStamp', 'desc')
    .where('isApproved','==',true)
    .get()
    .then(async (querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
            request = {
                id:doc.id,
                carId:doc.data().carID,
                userId:doc.data().userID,
                requestedBy:doc.data().requestedBy,
                requestedFor:doc.data().requestedFor,
            }
            requests.push(request);
        })
    });
    return requests;
}

const approveRequest = async (id) => {
    await firestore().collection('rents').doc(id).update({isApproved:true});
    return true;
}

const deleteRequest = async (id) => {
    await firestore().collection('rents').doc(id).delete();
    return true;
}

const approvedRequestsCollectionLength = async () => {
    const requests = await fetchApprovedRequestsData();
    return requests.length;
}

const carsCollectionLength = async () => {
    const cars = await fetchCarsData();
    return cars.length;
}

const usersCollectionLength = async () => {
    const users = await fetchUsersData();
    return users.length;
}


export const pickImage = async () => {
    let imageName= '';
    let imagePath = '';
    await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        imageName = image.path.split('/').pop();
        imagePath = image.path;
    });
    return {imageName,imagePath};
}



export const uploadImage = async (uri,imageName) => {    
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = storage().ref('cars').child(imageName);
    let URL = '';
    await ref.put(blob).then( async (data )=>{
        await storage().ref(`cars/${data.metadata.name}`).getDownloadURL().then( (url) => {
            URL = url;
        });
    });

    return URL;
}

const updateUser = async (id,name,email,password) => {
    
    await firestore().collection('users').doc(id).set({
            name:name,
            email:email,
            isBlocked:false,
            password:password,
        });

    return true;
}


export const downloadImage = async (imageUrl) => {
    const image = await firestore().storage.refFromURL(imageUrl).getDownloadURL();
    return image;
}

export {getUserByID,updateUser,updateCar,addCar,approveRequest,approvedRequestsCollectionLength,deleteRequest,fetchApprovedRequestsData,blockUnblockUser,deleteCar,deleteUser,fetchUsersData,fetchCarsData,fetchRequestData,carsCollectionLength,requestCollectionLength,usersCollectionLength};

