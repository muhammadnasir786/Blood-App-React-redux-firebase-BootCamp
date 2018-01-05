

class BBAction {
    // ------------------------- For Epic --------------------------------------------
    static GET_POST  = 'GET_POST'; 
    static ADD_POST  = 'ADD_POST';      // createa post
    static DELETE_POST = 'DELETE_POST';
    static UPDATE_POST = 'UPDATE_POST';

    static GET_USER = 'GET_USER';
    
    static GET_DONARS = 'GET_DONARS';
    static ADD_DONAR  = 'ADD_DONAR';
    
    static GET_PROFILE = 'GET_PROFILE'
    static UPDATE_PROFILE = 'UPDATE_PROFILE';

    // ------------------------- For Reducer --------------------------------------------

    static GET_POST_ADD = 'GET_POST_ADD';
    static GET_POST_DELETE = 'GET_POST_DELETE';
    static GET_POST_UPDATE = 'GET_POST_UPDATE';

    static GET_DONAR_ADD = 'GET_DONAR_ADD'

    static GET_PROFILE_ADD = 'GET_PROFILE_ADD';
    static GET_PROFILE_UPDATE = 'GET_PROFILE_UPDATE'

    static NULL = 'NULL'
    // ------------------------- For Epic --------------------------------------------
    static getProfile = ()=>{
        return {
            type : BBAction.GET_PROFILE
        }
    }
    static getPost = ()=>{
        return {
            type : BBAction.GET_POST,
            
        }
    }
    static addPost = (data)=>{
        return {
            type : BBAction.ADD_POST,
            payload : data
        }
    }
    static deletePost = (data)=>{
        return {
            type : BBAction.DELETE_POST,
            payload : data
        }
    }
    static updatePost = (data)=>{
        return {
            type : BBAction.UPDATE_POST,
            payload : data
        }
    }
    static getUser = (data)=>{
        return {
            type : BBAction.GET_USER,
            payload : data
        }
    }
    static updateProfile = (data)=>{
        return {
            type : BBAction.UPDATE_PROFILE,
            payload : data
        }
    }
    static getDonars = ()=>{
        return {
            type : BBAction.GET_DONARS,
            
        }
    }
    static addDonar = (data)=>{
        return {
            type : BBAction.ADD_DONAR,
            payload : data
        }
    }
    // ------------------------- For Reducer --------------------------------------------
    static getProfileUpdate = (data)=>{
        return {
            type : BBAction.GET_PROFILE_UPDATE,
            payload  : data
        }
    }
    static getPostAdd = (data)=>{
        return {
            type : BBAction.GET_POST_ADD,
            payload : data
        }
    }
    static getPostDelete = (data)=>{
        return {
            type : BBAction.GET_POST_DELETE,
            payload : data
        }
    }
    static getPostUpdate = (data)=>{
        return {
            type : BBAction.GET_POST_UPDATE,
            payload : data
        }
    }
    static getDonarAdd = (data)=>{
        return {
            type : BBAction.GET_DONAR_ADD,
            payload : data
        }
    }

}


export default BBAction;