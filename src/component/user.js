import props from "prop-types"
function User(name,surname,age,isCoding){
    return(
        <h1>{props.name}</h1>
    )
}

User.prototype={
    name :props.string.isRequired,
    surname :props.string,
    //bunlarin ikisinin arasinda veri tipi olabiliriyor: oneOfType kullanarak
    age: props.oneOfType([props.number,props.string]),
    isCoding: props.bool
}
export default User;