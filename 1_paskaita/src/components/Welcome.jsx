const Welcome =({isLoggedIn})=>{
    return isLoggedIn?(
        <div>Hello, nice to meet you.</div>
    ):(
        <div>You need to log in before writing comment.</div>
    );
};
export default Welcome