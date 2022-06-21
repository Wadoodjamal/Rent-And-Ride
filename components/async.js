import AsyncStorage from "@react-native-async-storage/async-storage";



  const getuser = async () => {
    try {

      const jsonValue = await AsyncStorage.getItem('123')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  const removeuser = async ()=> {
    try {
        await AsyncStorage.removeItem('123');
        console.log("user removed");
        return true;
    }
    catch(exception) {
        return false;
    }
}

  export{getuser, removeuser};