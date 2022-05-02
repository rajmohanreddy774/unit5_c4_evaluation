export const isAuth = 'isAuth';

export const toggelAuth = (data) => {
	return {
        type:isAuth,
        payload:data
    }
};
