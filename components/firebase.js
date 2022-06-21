/*eslint-disable */

import firestore from '@react-native-firebase/firestore';

const requestcar = async (carid, isapproved, requestedby, requestedfor, userid, days, totalrent) => {
    const car = {
        carID: carid,
        isApproved: isapproved,
        requestedBy: requestedby,
        requestedFor: requestedfor,
        userID: userid,
        days: days,
        totalrent: totalrent,
        timeStamp:firestore.FieldValue.serverTimestamp(),
    }
    
    // await firestore().collection('cars').where('ownerName','==','Wadood').get().then(async (querySnapshot) => {});

    const carRef = await firestore().collection('rents').add(car);
    return true;
}

const adduser = async (id, email, name, password) => {
    const user = {
        email: email,
        isBlocked: false,
        name: name,
        password: password,
    }
    
    // await firestore().collection('cars').where('ownerName','==','Wadood').get().then(async (querySnapshot) => {});

    const userRef = await firestore().collection('users').doc(id).set(user)
    return true;
}

const fetchAllCarsData = async () => {
    const cars = [];
    await firestore()
          .collection('cars')
          .get()
          .then(async (querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
                const car = {
                    id:doc.id,
                    company:doc.data().company,
                    model:doc.data().model,
                    rating:doc.data().rating,
                    ratePerHour:doc.data().ratePerHour,
                    isAvailable:doc.data().isAvailable,
                    category:doc.data().category,
                    imageURL:doc.data().imageURL,
                }
                cars.push(car);
                });
            });
            return cars;
}
//////////SUV//////////////
const fetchSuv = async () => {
    const cars = [];
    await firestore()
          .collection('cars')
          .where('category', '==', 'SUV')
          .get()
          .then(async (querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
                const car = {
                    id:doc.id,
                    company:doc.data().company,
                    model:doc.data().model,
                    rating:doc.data().rating,
                    ratePerHour:doc.data().ratePerHour,
                    isAvailable:doc.data().isAvailable,
                    category:doc.data().category,
                }
                cars.push(car);
                });
            });
            return cars;
}
///////Sedan//////////////////////////
const fetchSedan= async () => {
    const cars = [];
    await firestore()
          .collection('cars')
          .where('category', '==', 'Sedan')
          .get()
          .then(async (querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
                const car = {
                    id:doc.id,
                    company:doc.data().company,
                    model:doc.data().model,
                    rating:doc.data().rating,
                    ratePerHour:doc.data().ratePerHour,
                    isAvailable:doc.data().isAvailable,
                    category:doc.data().category,
                }
                cars.push(car);
                });
            });
            return cars;
}
//////////Sports/////////////////////
const fetchSports = async () => {
    const cars = [];
    await firestore()
          .collection('cars')
          .where('category', '==', 'Sports')
          .get()
          .then(async (querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
                const car = {
                    id:doc.id,
                    company:doc.data().company,
                    model:doc.data().model,
                    rating:doc.data().rating,
                    ratePerHour:doc.data().ratePerHour,
                    isAvailable:doc.data().isAvailable,
                    category:doc.data().category,
                }
                cars.push(car);
                });
            });
            return cars;
}
/////////Hatch/////////////////////////////
const fetchHatch = async () => {
    const cars = [];
    await firestore()
          .collection('cars')
          .where('category', '==', 'Hatch')
          .get()
          .then(async (querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
                const car = {
                    id:doc.id,
                    company:doc.data().company,
                    model:doc.data().model,
                    rating:doc.data().rating,
                    ratePerHour:doc.data().ratePerHour,
                    isAvailable:doc.data().isAvailable,
                    category:doc.data().category,
                }
                cars.push(car);
                });
            });
            return cars;
}
//////////////////////////////////////////////////////////

const deleteCar = async (id) => {
    await firestore().collection('cars').doc(id).delete();
    return true;
}

const getUser = async (id) => {
   
    const user = {};
    console.log(id);
    const test = await firestore()
    .collection('users').
    doc(id).get();
    // get().
    // then(querySnapshot => {
        
    //     querySnapshot.forEach( documentSnapshot => {
    //         // console.log('User ID: ', documentSnapshot.data().company);
    //         user = documentSnapshot.data();
    //         console.log(user);
    //       });
    // });
    
    return test.data();
    

}

export {fetchAllCarsData,fetchSuv,fetchSedan,fetchSports,fetchHatch,deleteCar, requestcar, adduser, getUser};

// name,company,model,type,year,rate