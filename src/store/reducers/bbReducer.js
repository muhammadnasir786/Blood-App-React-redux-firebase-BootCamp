import * as firebase from "firebase";
import BBAction from "../actions/BBAction";
let BB_STATE = {
    allPost : {},
    profileData : {},
    yourPost : {},
    donarList : {}
}
// O : { } ,
// A : {},
// B : {},
// AB : {}

// (action.payload.postData.uid === firebase.auth().currentUser.uid){
//     yourPost[action.payload.key] = action.payload.postData;

// donorlIst : {
//     O- : {
//         jsjkadnjkdnajksd : {   DOnor Data  }
//     }
// }
    
// }

let BBReducer = (state = BB_STATE,action)=>{

    switch (action.type) {
        case BBAction.GET_POST_ADD:
        console.log((action.payload.postData.uid === firebase.auth().currentUser.uid))
            let allPost = Object.assign({},state.allPost);
            let yourPost = Object.assign({},state.yourPost);
            allPost[action.payload.key] = action.payload.postData;
            if(action.payload.postData.uid === firebase.auth().currentUser.uid){ yourPost[action.payload.key] = action.payload.postData }
            return { ...state , allPost , yourPost};

        case BBAction.GET_POST_DELETE:
            let allPostz = Object.assign({},state.allPost);
            let yourPostz = Object.assign({},state.yourPost);

            delete allPostz[action.payload];
            delete yourPostz[action.payload];
            return { ...state ,allPost :  allPostz  , yourPost :  yourPostz };

        case BBAction.GET_POST_UPDATE:
            let allPostzz = Object.assign({},state.allPost);
            let yourPostzz = Object.assign({},state.yourPost );
            allPostzz[action.payload.key] = action.payload.postData;
            (action.payload.postData.uid === firebase.auth().currentUser.uid) ?  yourPostzz[action.payload.key] = action.payload.postData : null
            
            return { ...state , allPost :  allPostzz ,yourPost : yourPostzz}; 

        case BBAction.GET_PROFILE_ADD : 
            console.log(action)
            let profileData = Object.assign({}, state.profileData);
            profileData = action.payload.profileData;
            return { ...state , profileData };
        case BBAction.GET_DONAR_ADD : 
            console.log(action.payload)
            let donarList = Object.assign({} ,  state.donarList);
            donarList[action.payload.key] = action.payload.donarData;
            return { ...state , donarList }
        case 'LOGOUT' : 
            return { 
                allPost : {},
                profileData : {},
                yourPost : {},
                donarList : {}
             }
        default:
            return state;
        }
    }
    
    export default BBReducer;
    // ('O+' === action.payload.donarData.bloodGroup) ? donarList['O+'][action.payload.key] = action.payload.donarData : null
    // if(action.payload.donarData.bloodGroup === 'O+'|| action.payload.donarData.bloodGroup === 'O-') {
    //     donarList.O[action.payload.key] = action.payload.donarData;
    // }
    // if(action.payload.donarData.bloodGroup === 'A+'|| action.payload.donarData.bloodGroup === 'A-') {
    //     donarList.A[action.payload.key] = action.payload.donarData;
    // }
    // if(action.payload.donarData.bloodGroup === 'B+'|| action.payload.donarData.bloodGroup === 'B-') {
    //     donarList.B[action.payload.key] = action.payload.donarData;
    // }
    // if(action.payload.donarData.bloodGroup === 'AB+'|| action.payload.donarData.bloodGroup === 'AB-') {
    //     donarList.AB[action.payload.key] = action.payload.donarData;
    // }