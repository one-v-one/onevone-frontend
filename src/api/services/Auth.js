import axios from "axios";
import { CONSTANTS } from "../../Constants";

export const LoginService = async ( data ) => {

    const onSuccess = ( { data } ) => {
        return data;
    };

    const onFailure = error => {
        throw error;
    };

    return await axios
        .post( CONSTANTS.BASE_URL + CONSTANTS.LOGIN, data )
        .then( onSuccess )
        .catch( onFailure );
};

export const RegisterService = async ( data ) => {

    const onSuccess = ( { data } ) => {
        return data;
    };

    const onFailure = error => {
        throw error;
    };

    return await axios
        .post( CONSTANTS.BASE_URL + CONSTANTS.REGISTER, data )
        .then( onSuccess )
        .catch( onFailure );
};

export const VerifyEmailService = async ( data ) => {

    const onSuccess = ( { data } ) => {
        return data;
    };

    const onFailure = error => {
        throw error;
    };

    return await axios
        .post( CONSTANTS.BASE_URL + CONSTANTS.VERIFY_EMAIL, data )
        .then( onSuccess )
        .catch( onFailure );
};

export const ResetPasswordService = async ( data ) => {

    const onSuccess = ( { data } ) => {
        return data;
    };

    const onFailure = error => {
        throw error;
    };

    return await axios
        .post( CONSTANTS.BASE_URL + CONSTANTS.RESET_PASSWORD, data )
        .then( onSuccess )
        .catch( onFailure );
};


export const UpdatePasswordService = async ( data ) => {

    const onSuccess = ( { data } ) => {
        return data;
    };

    const onFailure = error => {
        throw error;
    };

    return await axios
        .post( CONSTANTS.BASE_URL + CONSTANTS.UPDATE_PASSWORD, data )
        .then( onSuccess )
        .catch( onFailure );
};