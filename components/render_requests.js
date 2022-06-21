/*eslint-disable */

export const renderItem = ({item}) => {
    return(
      <View style={{flex:1,flexDirection:'row',height:'100%',marginBottom:'5%'}}>
  
        <ReactPaper.Avatar.Image
          size={50}
          source={require('../assets/images/profile_pic.png')}
        />
  
        <View style={styles.textColumn}>
            <Text
              style={styles.userRequestText}
              >{item.requestedBy} Requested For {item.requestedFor}</Text>
  
            <Text
              style={styles.timeDateText}
              >16:15 pm. 12-12-2022</Text>
  
            </View>
              <View
                style={styles.buttonColumn}
              >
              <TouchableOpacity
                style={styles.buttons}
                onPress={()=>{
                  if(approveRequest(item.id)){
                    alert("Request Approved");
                  }else{
                    alert("Request Not Approved");
                  }
                }}
              >
              <Text
                style={styles.buttonText}
              >Approve</Text>
              </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={()=>{
                    if(deleteRequest(item.id)){
                    alert("Request Deleted");
                    }else{
                      alert("Request Not Deleted");
                    }
                  }}>
                    <Text
                      style={styles.buttonText}
                    >Delete</Text>
                </TouchableOpacity>
        </View>
      </View>
    )
}