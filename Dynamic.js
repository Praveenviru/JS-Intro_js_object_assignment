let user={
    name:"Alice",
    role:"Admin",
    activeStatus:"True",
    Access: function(){
      return user.activeStatus=="True"&&user.role=="Admin"||"User"?`${user.role} access Granted `:`${user.role} access Revoked`;
    }
};
//console.log(user)
console.log(user.Access());
let user1={
    name:"Bob",
    role:"User",
    activeStatus:"False",
    Access:function(){
      return user1.activeStatus=="True"?`${user1.role} access granted`:`${user1.role} access Revoked`;
    }
};
//console.log(user1)
console.log(user1.Access())
