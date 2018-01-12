import {
    Observable
} from 'rxjs'
import BBAction from "../actions/BBAction";
import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDqPpxlIGjEikoqzvZqB7_-10158KdfxOs",
    authDomain: "reactreduxtodoappfirebase.firebaseapp.com",
    databaseURL: "https://reactreduxtodoappfirebase.firebaseio.com",
    projectId: "reactreduxtodoappfirebase",
    storageBucket: "",
    messagingSenderId: "866095779438"
};
firebase.initializeApp(config);


const postRef = firebase.database().ref('/posts');
const ref = firebase.database().ref('/');
// const donarRef = firebase.database().ref('/donar');
// let user = firebase.auth().currentUser;
//  let uid = localStorage.getItem('uid')
//uid k liye firebase function currentUser ka Search it

class BBEpic {

    static addPost = (action$) => {
        return action$.ofType(BBAction.ADD_POST)
            .switchMap(({
                payload
            }) => {
                // console.log('Nasir')
                return Observable.fromPromise(
                    postRef.push(payload)
                )
                    .map((x) => {
                        return {
                            type: BBAction.NULL
                        }
                    })
            })
    }

    static deletePost = (action$) => {
        return action$.ofType(BBAction.DELETE_POST)
            .switchMap(({
                payload
            }) => {
                // console.log('Nasir')
                return Observable.fromPromise(
                    postRef.child(`/${payload}/`).set(null)
                )
                    .map((x) => {
                        return {
                            type: BBAction.NULL
                        }
                    })
            })
    }
    static updatePost = (action$) => {
        // alert('asnias')
        return action$.ofType(BBAction.UPDATE_POST)
            .switchMap(({
                payload
            }) => {
                console.log(payload)
                return Observable.fromPromise(
                    postRef.child(`${payload.key}`).set(payload.postData)
                )
                    .map((x) => {
                        return {
                            type: BBAction.NULL
                        }
                    })
            })
    }



    static getPost = (action$) => {
        return action$.ofType(BBAction.GET_POST)
            .switchMap(({
                payload
            }) => {
                return new Observable((observer) => {
                    postRef.on('child_added', (s) => {
                        observer.next({
                            type: BBAction.GET_POST_ADD,
                            payload: {
                                key: s.key,
                                postData: s.val()
                            }
                        })
                    })
                    postRef.on('child_removed', (s) => {
                        console.log(s.val(), s.key)
                        observer.next({
                            type: BBAction.GET_POST_DELETE,
                            payload: s.key
                        })
                    })
                    postRef.on('child_changed', (s) => {
                        console.log(s.val(), s.key)
                        alert('child_changed')
                        observer.next({
                            type: BBAction.GET_POST_UPDATE,
                            payload: {
                                key: s.key,
                                postData: s.val()
                            }
                        })
                    })

                }).takeUntil(action$.ofType('LOGOUT'));
            })
    }



    // static getPost = (action$) => {
    //     return action$.ofType(BBAction.GET_POST)
    //         .switchMap(({
    //             payload
    //         }) => {
    //             return new Observable((observer) => {
    //                 postRef.on('child_added', (s) => {
    //                     observer.next({
    //                         type: BBAction.GET_POST_ADD,
    //                         payload: {
    //                             key: s.key,
    //                             postData: s.val()
    //                         }
    //                     })
    //                 })
    //                 postRef.on('child_removed', (s) => {
    //                     console.log(s.val(), s.key)
    //                     observer.next({
    //                         type: BBAction.GET_POST_DELETE,
    //                         payload: s.key
    //                     })
    //                 })
    //                 postRef.on('child_changed', (s) => {
    //                     console.log(s.val(), s.key)
    //                     observer.next({
    //                         type: BBAction.GET_POST_UPDATE,
    //                         payload: {
    //                             key: s.key,
    //                             postData: s.val()
    //                         }
    //                     })
    //                 })

    //             })
    //         })
    // }


    // static newone = (action$)=>{
    //     return action$.ofType()
    //     .switchMap(({payload })=>{
    //         console.log('Nasir')
    //         return Observable.fromPromise(
    //         )
    //         .map((x)=>{
    //             return { type : BBAction.GET_PROFILE_ADD }
    //         })
    //     })
    // } 



    //---------------------------For Profile//---------------------------//---------------------------
    
    
    static profileUpdate = (action$) => {
        return action$.ofType(BBAction.UPDATE_PROFILE)
            .switchMap(({ payload }) => {
                // console.log(payload)
                return Observable.fromPromise(
                    ref.child(`users/${firebase.auth().currentUser.uid}/userData`).set(payload)
                )
                    .map((x) => {
                        return {
                            type: BBAction.NULL
                        }
                    })
            })
    }

   

    static getProfile = (action$) => {
        
        return action$.ofType(BBAction.GET_PROFILE)
        .switchMap(({payload}) => {
            // console.log()
                return new Observable((observer) => {
                    ref.child(`users/${firebase.auth().currentUser.uid}`).on('child_added', (s) => {
                        // console.log(s.val(), s.key)
                        observer.next({
                            type: BBAction.GET_PROFILE_ADD,
                            payload: {
                                key: s.key,
                                profileData: s.val()
                            }
                        })
                    })
                    ref.child(`users/${firebase.auth().currentUser.uid}`).on('child_changed', (s) => {
                        console.log(s.val(), s.key)
                        observer.next({
                            type: BBAction.GET_PROFILE_ADD,
                            payload: {
                                key: s.key,
                                profileData: s.val()
                            }
                        })
                    })

                })
            })
    }

    //---------------------------For Donars//---------------------------//---------------------------


    static addDonar = (action$) => {
        return action$.ofType(BBAction.ADD_DONAR)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    ref.child('donar/').push(payload).then((res)=>{
                        alert('Thanks For Blood Donate')
                    }).catch((err)=>{
                        alert(err.message)
                    })
                )
                    .map((x) => {
                        return { type: BBAction.NULL }
                    })
            })
    }

    static getDonars = (action$)=>{
       
        return action$.ofType(BBAction.GET_DONARS)
            .switchMap(({ payload })=>{
                return new Observable((observer)=>{
                    ref.child(`donar`).on('child_added',(s)=>{
                        console.log(s.val())
                        observer.next({
                            type: BBAction.GET_DONAR_ADD,
                            payload : {
                                key : s.key,
                                donarData : s.val()
                            }
                        })
                    })
                })
            })
    }

    static getCancelLogout = (action$) =>
            action$.ofType('LOGOUT')
                .switchMap(({ payload }) => {
                    ref.off();
                    postRef.off();
                    return Observable.of({ type: null})
                    //we dont want to do any work on GET_TODO_CANCELLED so we are dispatching NULL action
                })




}
export default BBEpic;
