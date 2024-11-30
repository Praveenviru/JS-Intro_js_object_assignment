function determineAccess(person) {
    return person.role === "admin" ? (
        person.active ? (
            person.experience > 5 ? (
                person.department === "IT" ? "Full IT Admin Access" : "Full General Admin Access"
            ) : "Limited Admin Access"
        ) : "Admin Access Revoked"
    ) : person.role === "manager" ? (
        person.active ? (
            person.experience > 3 ? (
                person.department === "Sales" ? "Full Sales Manager Access" : "Full Manager Access"
            ) : "Limited Manager Access"
        ) : "Manager Access Revoked"
    ) : person.role === "user" ? (
        person.active ? (
            person.department === "Support" ? "Priority Support Access" : "User Access"
        ) : "User Access Revoked"
    ) : "Invalid Role";
}
let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
console.log(determineAccess(person1));