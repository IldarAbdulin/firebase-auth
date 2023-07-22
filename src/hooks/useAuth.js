import {useSelector} from 'react-redux';

export const useAuth = () => {
    const {email, token, id} = useSelector(state => state.authUser);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}